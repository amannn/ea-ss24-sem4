import RoomRepository from '@/repositories/RoomRepository';
import UserRepository from '@/repositories/UserRepository';
import {notFound} from 'next/navigation';
import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

export function POST(request: NextRequest, props: {params: {id: string}}) {
  const id = z.coerce
    .number()
    .optional()
    .catch(undefined)
    .parse(props.params.id);
  if (id == null) notFound();

  let room = RoomRepository.getRoom(id);
  if (!room) notFound();

  const me = UserRepository.getMe();
  if (!me) notFound();

  const hasStarred = me.starredRoomIds.includes(room.id);
  if (hasStarred) {
    me.starredRoomIds.splice(me.starredRoomIds.indexOf(room.id), 1);
  } else {
    me.starredRoomIds.push(room.id);
  }

  return NextResponse.json(RoomRepository.getRoom(id));
}
