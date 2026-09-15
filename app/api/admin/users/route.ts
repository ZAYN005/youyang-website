import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



export async function GET(){


const users =
await prisma.admin.findMany({

orderBy:{
createdAt:"desc"
}

});


return NextResponse.json(users);


}





export async function POST(
request:Request
){


const body =
await request.json();



const user =
await prisma.admin.create({

data:{

name:body.name,

email:body.email,

password:body.password,

role:body.role,

status:"ACTIVE"

}

});



return NextResponse.json(user);


}