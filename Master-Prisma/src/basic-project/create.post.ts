import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createPost = await prisma.post.create({
    data: {
      title: "This is title2",
      content: "This is content2",
      authorId: 3,
      postCategory: {
        create: {
          categoryId: 2, 
          //   category: { 
          //     connect: {
          //       id: 3,
          //     },
          //   },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

// main();
