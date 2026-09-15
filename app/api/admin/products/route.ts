import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



export async function GET(){


const products =
await prisma.product.findMany({

orderBy:{
createdAt:"desc"
}

});


return NextResponse.json(products);


}





export async function POST(
request:Request
){


const body =
await request.json();



const product =
await prisma.product.create({

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