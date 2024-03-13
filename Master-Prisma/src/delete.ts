import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePost = async () => {
  const result = await prisma.post.delete({
    where: {
      id: 22,
    },
  });

  console.log(result);
};

deletePost();
