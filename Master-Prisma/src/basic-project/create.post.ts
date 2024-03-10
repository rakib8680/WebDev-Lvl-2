import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createPost = await prisma.post.create({
    data: {
      title: "This is title 3",
      content: "This is content 3",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
        // {
        //   categoryId: 2,
        //   //   category: {
        //   //     connect: {
        //   //       id: 3,
        //   //     },
        //   //   },
        // },
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

// main();
