import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: "published",
    _count: {
      published: true,
    },
    having: {
      //having and where is almost same
      published: true,
    },
  });

  //   group by user
  const groupUser = await prisma.user.groupBy({
    by: "username",
    having: {
      age: {
        _max: {
          gt: 30,
        },
      },
    },
  });

  console.log(groupUser);
};

groupBy();
