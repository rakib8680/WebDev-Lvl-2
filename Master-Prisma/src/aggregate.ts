import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregateFunctions = async () => {
  //find average
  const averageAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //    find sum of age
  const sumOfAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //    count of age fields
  const count = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  //    count total records
  const countData = await prisma.user.count();

  console.log(countData);
};

aggregateFunctions();
