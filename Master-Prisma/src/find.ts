import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

// get posts 
const getAllPostsFromDB = await prisma.post.findMany();

// find first  & find first or throw
const findFirst = await prisma.post.findFirstOrThrow({
    where:{
        id : 23
    }
});


const findUnique =await prisma.post.findUnique({
    where:{
        id: 23
    },
    select:{
        title:true,
        content:true,
        authorName:true
    }
})


console.log(findUnique);


};

main();
