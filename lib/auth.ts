import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


export const authOptions: AuthOptions = {

  providers: [

    CredentialsProvider({

      name: "Credentials",

      credentials: {

        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },

      },


      async authorize(credentials) {


        if (
          !credentials?.email ||
          !credentials?.password
        ) {

          return null;

        }


        const admin = await prisma.admin.findUnique({

          where: {
            email: credentials.email,
          },

        });


        if (!admin) {

          return null;

        }


        const isPasswordValid = await bcrypt.compare(

          credentials.password,

          admin.password

        );


        if (!isPasswordValid) {

          return null;

        }


        return {

          id: admin.id,

          name: admin.name,

          email: admin.email,

          role: admin.role,

        };

      },

    }),

  ],


  pages: {

    signIn: "/admin/login",

  },


  session: {

    strategy: "jwt",

  },


  callbacks: {


    async jwt({ token, user }) {

      if (user) {

        token.id = user.id;

        token.role = user.role;

      }

      return token;

    },


    async session({ session, token }) {


      if (session.user) {

        session.user.id = token.id as string;

        session.user.role = token.role as string;

      }


      return session;

    },


  },


  secret: process.env.NEXTAUTH_SECRET,

};