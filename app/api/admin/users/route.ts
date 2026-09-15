import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { requireRole } from "@/lib/admin-auth";

import bcrypt from "bcryptjs";



export const dynamic = "force-dynamic";





export async function GET(){


try{


await requireRole([
"ADMIN"
]);



const users = await prisma.admin.findMany({

orderBy:{
createdAt:"desc"
}

});



return NextResponse.json(users);


}



catch(error:any){


return NextResponse.json(
{
error:"Unauthorized"
},
{
status:401
}
);


}



}







export async function POST(

request:Request

){


try{


await requireRole([
"ADMIN"
]);



const body = await request.json();



const hashedPassword = await bcrypt.hash(

body.password,

10

);




const user = await prisma.admin.create({

data:{


name:body.name,


email:body.email,


password:hashedPassword,


role:body.role,


status:"ACTIVE"


}

});




return NextResponse.json(user);


}



catch(error:any){


return NextResponse.json(
{
error:"Failed"
},
{
status:500
}
);


}



}