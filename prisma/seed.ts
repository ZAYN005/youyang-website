import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


async function main() {

  const password = await bcrypt.hash(
    "ChangeThisPassword123!",
    10
  );


  const admin = await prisma.admin.create({

    data: {

      name: "Youyang Admin",

      email: "admin@yyteck.cn",

      password,

      role: "ADMIN",

    },

  });


  console.log("Admin created:", admin.email);

}


main()
  .then(async () => {

    await prisma.$disconnect();

  })
  .catch(async (error) => {

    console.error(error);

    await prisma.$disconnect();

    process.exit(1);

  });