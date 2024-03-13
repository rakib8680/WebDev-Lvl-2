import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  // get all posts
  const posts = await prisma.$queryRaw`select * from posts`;

  // delete users table data
  await prisma.$queryRaw`truncate table users cascade`;

  //   console.log(posts);
};

// rawQuery();
