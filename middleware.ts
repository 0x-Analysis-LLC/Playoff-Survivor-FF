import { getCurrentRound } from './lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// Define the type of the request parameter
function customMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle redirection for the /team route
  if (pathname.startsWith('/team') && !pathname.includes('/team/')) {
    const currentRound = getCurrentRound(); // Determine the current round
    if (currentRound) {
      const url = request.nextUrl.clone();
      url.pathname = `/team/${currentRound}`;
      return NextResponse.redirect(url);
    }
    // Optional: handle the case where currentRound is not determined
  }

  return NextResponse.next();
}

// Export the composed middleware
export default withAuth(customMiddleware);

export const config = {
  matcher: ['/((?!login|register|api).*)']
};