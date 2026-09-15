import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {

    const body = await request.json();


    const {
      name,
      company,
      email,
      phone,
      country,
      solutionInterest,
      productInterest,
      message,
    } = body;


    if (!name || !email || !message) {

      return NextResponse.json(
        {
          error: "Required fields are missing",
        },
        {
          status: 400,
        }
      );

    }


    const inquiry = await prisma.inquiry.create({

      data: {
        name,
        company,
        email,
        phone,
        country,
        solutionInterest,
        productInterest,
        message,
      },

    });


    return NextResponse.json(
      {
        success: true,
        data: inquiry,
      },
      {
        status: 201,
      }
    );


  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );

  }

}