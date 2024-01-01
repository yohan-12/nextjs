import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  //! this line looks weird af, but it's essentially saying, pay attention to all paths except for ones that start with '/api', '/_ext/static', 'or end with .png
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
