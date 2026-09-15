import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


export async function GET() {


  const inquiries = await prisma.inquiry.findMany({

    orderBy: {

      createdAt: "desc"

    }

  });



  const total = inquiries.length;



  const status = {

    New: inquiries.filter(
      (i) => i.status === "New"
    ).length,


    Reviewing: inquiries.filter(
      (i) => i.status === "Reviewing"
    ).length,


    Contacted: inquiries.filter(
      (i) => i.status === "Contacted"
    ).length,


    Qualified: inquiries.filter(
      (i) => i.status === "Qualified"
    ).length,


    Closed: inquiries.filter(
      (i) => i.status === "Closed"
    ).length,

  };





  const products: Record<string, number> = {};



  inquiries.forEach((item) => {


    const product = item.productInterest || "Unknown";


    products[product] = 
      (products[product] || 0) + 1;


  });






  const countries: Record<string, number> = {};



  inquiries.forEach((item) => {


    const country = item.country || "Unknown";


    countries[country] =
      (countries[country] || 0) + 1;


  });






  return NextResponse.json({

    total,

    status,

    products,

    countries,

    recent: inquiries.slice(0,10)

  });


}