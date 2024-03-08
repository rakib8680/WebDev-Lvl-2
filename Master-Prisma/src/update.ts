import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 21,
    },
    data: {
      authorName: "Rakib 3",
    },
  });

  const multipleUpdate = await prisma.post.updateMany({
    where: {
      title: "This is title 2",
    },
    data: {
      published: true,
    },
  });

  const upsertData = await prisma.post.upsert({
    where: {
      id: 23,
    },
    update: {
      authorName: "rakib",
    },
    create: {
      title: "Title 23",
      content: "Content 23",
    },
  });

  console.log(upsertData);
};

updates();
