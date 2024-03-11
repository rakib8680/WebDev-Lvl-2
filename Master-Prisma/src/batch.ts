import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {

  // query 1
  const createUser = prisma.user.create({
    data: {
      username: "shakil",
      email: "shakil@gmail.com",
      age: 21,
    },
  });

  // query 2
  const updateUser = prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      age: 40,
    },
  });

  // Batch transaction
  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData);
  console.log(updateData);
};

// batchTransaction();
