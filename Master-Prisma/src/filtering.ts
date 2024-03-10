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

  //   NOT filtering
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

  //   startsWith
  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user",
      },
    },
  });

  //   equals
  const equals = await prisma.user.findMany({
    where: {
      email: {
        equals: "user1@gmail.com",
      },
    },
  });

  const userNameArray = ["user1", "user2", "user3"];
  const userNamesByArray = await prisma.user.findMany({
    where:{
        username:{
            in: userNameArray
        }
    }
  })

  console.log(userNamesByArray);
};

filtering();
