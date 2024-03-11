import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tc) => {
    // query 1
    const updateUser = await tc.user.update({
      where: {
        id: 3,
      },
      data: {
        age: 30,
      },
    });

    //   query 2
    const count = await tc.user.count();

    // query 3
    const getAllPost = await tc.post.findMany({
      where: {
        published: true,
      },
    });

    return {
      updateUser,
      count,
      getAllPost,
    };
  });
  console.log(result);
};

// interactiveTransaction();
