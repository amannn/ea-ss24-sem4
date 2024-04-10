import RoomRepository from '@/repositories/RoomRepository';
import paginate from '@/utils/paginate';
import withLinks from '@/utils/withLinks';
import {sort} from 'fast-sort';
import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const allRooms = RoomRepository.getAllRooms();

  const size = z.coerce
    .number()
    .min(1)
    .max(100)
    .catch(20)
    .parse(request.nextUrl.searchParams.get('size'));

  const page = z.coerce
    .number()
    .min(0)
    .max(Math.ceil(allRooms.length / size))
    .catch(0)
    .parse(request.nextUrl.searchParams.get('page'));

  const sortValue = z
    .enum(['createdAt', 'pricePerNight'])
    .catch('createdAt')
    .parse(request.nextUrl.searchParams.get('sort'));

  const sorter = sort(allRooms);

  const nodes =
    sortValue === 'createdAt'
      ? sorter.desc((cur) => cur.createdAt)
      : sorter.asc((cur) => cur.pricePerNight.amount);

  let result = paginate({
    pathname: '/rooms',
    nodes,
    size,
    page
  });

  result = {
    ...result,
    nodes: result.nodes.map((room) =>
      withLinks(room, {
        self: `/rooms/${room.id}`,
        owner: `/users/${room.owner.id}`
      })
    )
  };

  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      heroUrl: z.string().url().startsWith('https://c.pxhere.com/'),
      pricePerNight: z.object({
        amount: z.number(),
        currency: z.enum(['USD'])
      })
    })
    .safeParse(body);

  if (!result.success) {
    return new Response(result.error.toString(), {status: 400});
  }

  const room = RoomRepository.createRoom(result.data);
  return NextResponse.json(withLinks(room, {self: `/rooms/${room.id}`}), {
    status: 201
  });
}
