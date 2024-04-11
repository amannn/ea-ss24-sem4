import {API_URL} from '@/config';

export type ApiResponse<Data = unknown> = {
  statusText: string;
  status?: number;
  data?: Data;
};

export default class ApiService {
  static async fetch(pathname: string, init?: RequestInit) {
    let status, statusText, data;

    try {
      const url = new URL(pathname, API_URL);
      const response = await fetch(url, init);
      status = response.status;
      statusText = response.statusText;
      data = await response.json().catch(() => undefined);
    } catch (error) {
      statusText = error.message;
    }

    return {status, statusText, data};
  }

  static post(pathname: string, body?: any) {
    return ApiService.fetch(pathname, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    });
  }
}
