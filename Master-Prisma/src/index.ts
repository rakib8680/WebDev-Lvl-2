import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // create post 
//   const createAPost = await prisma.post.create({
//     data: {
//       title: "This is a post",
//       content: "aldkfla;dfl;akdfl;adfl;ad;fkadfj;ad",
//       authorName: "Rakib",
//     },
//   });

//   console.log(createAPost);  


// get post 
const getAllPostsFromDB = await prisma.post.findMany();

console.log(getAllPostsFromDB);


};

main();
