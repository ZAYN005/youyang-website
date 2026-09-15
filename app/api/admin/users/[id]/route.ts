import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



export async function PATCH(

request:Request,

context:{
params:Promise<{id:string}>
}

){


const {id}=await context.params;


const body=
await request.json();



const user =
await prisma.admin.update({

where:{
id
},

data:{

name:body.name,

role:body.role,

status:body.status

}

});



return NextResponse.json(user);


}







export async function DELETE(

request:Request,

context:{
params:Promise<{id:string}>
}

){


const {id}=await context.params;



await prisma.admin.delete({

where:{
id
}

});



return NextResponse.json({

success:true

});


}