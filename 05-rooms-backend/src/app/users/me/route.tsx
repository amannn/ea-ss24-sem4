import db from '@/db';
import {NextResponse} from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  const id = db.me.id;
  const user = db.users.find((cur) => cur.id === id);
  return NextResponse.json(user);
}
