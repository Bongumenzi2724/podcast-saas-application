import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

//this will catch all the routes that starts with sign-in

const isPublicRoute=createRouteMatcher(['/sign-in(.*)','/sign-up(.*)','/']);

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};