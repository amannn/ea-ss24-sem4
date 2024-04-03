import db from '@/db';
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

  let result = db.users.find((cur) => cur.id === id);
  if (!result) notFound();

  return NextResponse.json(result);
}
