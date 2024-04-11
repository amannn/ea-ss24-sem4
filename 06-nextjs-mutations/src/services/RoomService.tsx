import {Collection, Id, Room} from '@/types';
import ApiService, {ApiResponse} from './ApiService';

export default class RoomService {
  static async getRooms() {
    const result = await ApiService.fetch('/rooms');
    return result as ApiResponse<Collection<Room>>;
  }

  static async toggleRoomStarred(roomId: Id) {
    const result = await ApiService.post(`/rooms/${roomId}/toggle-starred`);
    return result as ApiResponse<Room>;
  }
}
