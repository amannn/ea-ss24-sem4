import withLinks from '@/utils/withLinks';
import {NextResponse} from 'next/server';

export function GET() {
  return NextResponse.json(
    withLinks(
      {},
      {
        rooms: '/rooms{?page,size,sort}',
        room: '/rooms/{id}',
        user: '/users/{id}',
        me: '/users/me'
      }
    )
  );
}
