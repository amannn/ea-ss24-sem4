import {NextRequest, NextResponse} from 'next/server';

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

/**
 * Enables CORS support
 */
export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  const isPreflight = request.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      'Access-Control-Allow-Origin': origin,
      ...corsOptions
    };
    return NextResponse.json({}, {headers: preflightHeaders});
  }

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', origin);
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: '/:path*'
};
