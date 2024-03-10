import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
      //   include:{    ////this is not fluent api, it is more like populate of mongoose
      //     Post:true
      //   }
    })
    .Post(); //this is called fluent api

  console.log(result);
};

relationalQueries();
