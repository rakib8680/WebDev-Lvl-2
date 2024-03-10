import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  // AND filtering
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   Or filtering
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   Not filtering
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
        // {
        //   published: true,
        // },
      ],
    },
  });

  //   startsWith filtering
  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user",
      },
    },
  });

  //   equals filtering
  const equals = await prisma.user.findMany({
    where: {
      email: {
        equals: "user1@gmail.com",
      },
    },
  });

  //   in filtering
  const userNameArray = ["user1", "user2", "user3"];
  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  //   in depth data filtering
  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      Post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};

filtering();
