import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function requireAdmin(){

  const session = await getServerSession(authOptions);


  if(!session?.user){

    throw new Error("UNAUTHORIZED");

  }


  return session;

}



export async function requireRole(
  roles:string[]
){

  const session = await requireAdmin();


  const role = session.user.role;


  if(!roles.includes(role)){

    throw new Error("FORBIDDEN");

  }


  return session;

}