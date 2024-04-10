import RoomRepository from '@/repositories/RoomRepository';
import {notFound} from 'next/navigation';
import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

export const dynamic = 'force-dynamic';

export function GET(request: NextRequest, props: {params: {id: string}}) {
  const id = z.coerce
    .number()
    .optional()
    .catch(undefined)
    .parse(props.params.id);
  if (id == null) notFound();

  let result = RoomRepository.getRoom(id);
  if (!result) notFound();

  return NextResponse.json(result);
}
