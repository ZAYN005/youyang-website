import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



export async function PATCH(
request:Request,
context:{
params:Promise<{id:string}>
}

){


const {id}=await context.params;


const body=await request.json();



const product =
await prisma.product.update({

where:{
id
},

data:{

name:body.name,

slug:body.slug,

category:body.category,

shortDescription:
body.shortDescription,

description:
body.description,

features:
body.features,

image:
body.image,

status:
body.status

}

});


return NextResponse.json(product);


}







export async function DELETE(

request:Request,

context:{
params:Promise<{id:string}>
}

){


const {id}=await context.params;



await prisma.product.delete({

where:{
id
}

});


return NextResponse.json({

success:true

});


}