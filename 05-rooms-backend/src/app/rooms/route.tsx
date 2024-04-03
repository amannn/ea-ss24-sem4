import db from '@/db';
import paginate from '@/utils/paginate';
import withLinks from '@/utils/withLinks';
import {sort} from 'fast-sort';
import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const size = z.coerce
    .number()
    .min(1)
    .max(100)
    .catch(20)
    .parse(request.nextUrl.searchParams.get('size'));

  const page = z.coerce
    .number()
    .min(0)
    .max(Math.ceil(db.rooms.length / size))
    .catch(0)
    .parse(request.nextUrl.searchParams.get('page'));

  const sortValue = z
    .enum(['createdAt', 'pricePerNight'])
    .catch('createdAt')
    .parse(request.nextUrl.searchParams.get('sort'));

  const sorter = sort(db.rooms);

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
      withLinks(
        {
          ...room,
          owner: db.users.find((cur) => cur.id === room.owner.id)!
        },
        {
          self: `/rooms/${room.id}`,
          owner: `/users/${room.owner.id}`
        }
      )
    )
  };

  return NextResponse.json(result);
}
