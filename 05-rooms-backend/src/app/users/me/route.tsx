import UserRepository from '@/repositories/UserRepository';
import {NextResponse} from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json(UserRepository.getMe());
}
