import {Me} from '@/types';
import ApiService, {ApiResponse} from './ApiService';

export default class UserService {
  static async getCurrentUser() {
    const result = await ApiService.fetch('/users/me');
    return result as ApiResponse<Me>;
  }
}
