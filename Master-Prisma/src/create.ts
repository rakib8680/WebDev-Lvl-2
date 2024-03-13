import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create post into db
  //   const createAPost = await prisma.post.create({
  //     data: {
  //       title: "This is a post",
  //       content: "aldkfla;dfl;akdfl;adfl;ad;fkadfj;ad",
  //       authorName: "Rakib",
  //     },
  //   });

  // create multiple
  const createMultiple = await prisma.post.createMany({
    data: [
      {
        title: "This is title 1",
        content: "This is content 1",
        authorName: "Rakib",
      },
      {
        title: "This is title 2",
        content: "This is content 2",
        authorName: "Rakib",
      },
      {
        title: "This is title 3",
        content: "This is content 3",
        authorName: "Rakib",
      },
    ],
  });

  // console.log(createMultiple);
};

main();
