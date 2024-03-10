import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  //   console.log(e);
  console.log(e.duration, "ms");
  console.log(e.timestamp);
});

const main = async () => {
  const getAllPosts = await prisma.post.findMany();

  //   console.log(getAllPosts);
};

// main();
