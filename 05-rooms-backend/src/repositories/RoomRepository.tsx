import db from '@/db';
import {Id, Room, RoomInput} from '@/types';
import UserRepository from './UserRepository';

export default class RoomRepository {
  public static getRoom(id: Id): Room | undefined {
    const result = db.rooms.find((cur) => cur.id === id);
    if (!result) return undefined;

    const me = UserRepository.getMe();
    return {
      ...result,
      owner: UserRepository.getUser(result.owner.id)!,
      isStarred: me.starredRoomIds.includes(id)
    };
  }

  public static getAllRooms(): Array<Room> {
    return db.rooms.map((room) => RoomRepository.getRoom(room.id)!);
  }

  public static createRoom(input: RoomInput): Room {
    const room = {
      ...input,
      id: db.rooms.length + 1,
      owner: db.me,
      createdAt: new Date().toISOString()
    };
    db.rooms.push(room);
    return RoomRepository.getRoom(room.id)!;
  }
}
