import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,//rules we prepared earlier for who's allowed or not
  providers: [Credentials({})],
});
//? The whole purpose of this code is fancy way of saying only you friends get come inside to the party 