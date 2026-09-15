import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  if (hostname === 'book.elitephysicianswealthplanning.com' && pathname === '/') {
    return NextResponse.rewrite(new URL('/landing', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/|.*\\..*|api/|public/).*)',
  ],
};
