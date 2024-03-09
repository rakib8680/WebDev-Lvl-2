import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createCategory = await prisma.category.create({
    data: {
      name: "SOftware engineering",
    },
  });

  console.log(createCategory);
};

// main();
