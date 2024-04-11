import {Collection, Room} from '@/types';
import ApiService, {ApiResponse} from './ApiService';

export default class RoomService {
  static async getRooms() {
    const result = await ApiService.fetch('/rooms');
    return result as ApiResponse<Collection<Room>>;
  }
}
