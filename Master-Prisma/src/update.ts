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
      title: 'This is title 2'
    },
    data: {
      published:true
    },
  });

//   console.log(multipleUpdate);
};

updates();
