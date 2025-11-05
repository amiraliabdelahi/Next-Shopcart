import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import { getUserById } from "./lib/getUserById";
import prisma from "./lib/config/db";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./lib/getUserByEmail";
import { signInSchema } from "./lib/zod";
import { compare } from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      role: "USER" | "ADMIN";
      id: string
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET || "secret",
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);
      if (user) token.role = user.role;

      return token;
    },

    async session({ token, session }) {
      if (!token.role || !token.sub) return session;

      session.user.role = token.role as "USER" | "ADMIN";
      session.user.id = token.sub;

      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = signInSchema.safeParse(credentials);
        if (!validatedFields.success) return null;
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        console.log(user);
        if (!user || !user.email) {
          return null
        };
        // const passowrdsMatch = await compare(password, user.password as string);
        if (password !== user.password) {
          return null
        };
        console.log("login succes");
        return user;
      },
    }),
  ],
});
