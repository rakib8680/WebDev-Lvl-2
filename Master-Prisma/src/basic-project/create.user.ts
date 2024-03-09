import { PrismaClient, userRole } from "@prisma/client";


const prisma = new PrismaClient();


const main = async ()=>{
    const createUser = await prisma.user.create({
        data:{
            username: 'user2',
            email: 'user2@gmail.com',
            role : userRole.user
        }
    })


    const createProfile = await prisma.profile.create({
        data:{
            bio:'This is a bio',
            userId : 1
        }
    })

    // console.log(createProfile);
}


// main();