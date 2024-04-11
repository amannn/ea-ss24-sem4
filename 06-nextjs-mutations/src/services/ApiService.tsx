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

      // Any response from API (e.g. 200, 404, …)
      status = response.status;
      statusText = response.statusText;
      data = await response.json().catch(() => undefined);
    } catch (error) {
      // No response from API
      statusText = error.message;
    }

    return {status, statusText, data};

    // 404
    // return {status: 404, statusText: 'Not Found', data: undefined}
    // 200
    // return {status: 200, statusText: 'Success', data: ...}
  }

  static post(pathname: string, body?: any) {
    return ApiService.fetch(pathname, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    });
  }
}
