import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export async function middleware(req:any){

  const token = await getToken({

    req,

    secret: process.env.NEXTAUTH_SECRET

  });


  const isAdminRoute =
    req.nextUrl.pathname.startsWith("/admin")
    &&
    !req.nextUrl.pathname.startsWith("/admin/login");


  if(isAdminRoute && !token){

    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );

  }


  return NextResponse.next();

}



export const config = {

  matcher:[
    "/admin/:path*"
  ]

};