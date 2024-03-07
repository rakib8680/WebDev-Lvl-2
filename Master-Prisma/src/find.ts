import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

// get posts 
const getAllPostsFromDB = await prisma.post.findMany();

console.log(getAllPostsFromDB);


};

main();
