import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";



export async function GET(){


try{


const inquiries = await prisma.inquiry.findMany({

orderBy:{
createdAt:"desc"
}

});





const stats={


total:
inquiries.length,



new:
inquiries.filter(
(i:any)=>i.status==="New"
).length,



contacted:
inquiries.filter(
(i:any)=>i.status==="Contacted"
).length,



qualified:
inquiries.filter(
(i:any)=>i.status==="Qualified"
).length,



closed:
inquiries.filter(
(i:any)=>i.status==="Closed"
).length,


};





return NextResponse.json({

stats,

inquiries

});


}


catch(error){


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