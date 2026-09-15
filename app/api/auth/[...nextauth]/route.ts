import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


const handler = NextAuth({

  providers: [

    CredentialsProvider({

      name: "Admin Login",

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


        if (!credentials?.email || !credentials?.password) {

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


        const passwordMatch = await bcrypt.compare(

          credentials.password,

          admin.password

        );


        if (!passwordMatch) {

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

        token.role = user.role;

      }

      return token;

    },


    async session({ session, token }) {

      if (session.user) {

        session.user.role = token.role as string;

      }

      return session;

    },


  },


});


export { handler as GET, handler as POST };