import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 5,
  });

  // cursor based pagination
  const cursorPagination = await prisma.post.findMany({
    skip: 1,
    take: 3,
    cursor: {
      id: 34,
    },
  });

  //   sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      title: "This is title 1",
    },
  });

  console.log(sortedData);
};

paginationSorting();
