import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() => {
   
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'first title 2',
    //         content: 'this is content 2',
    //         authorName: 'Polash ahmed',

    //     }
    // })

    const getAllPost = await prisma.post.findMany()

    console.log(getAllPost)

}


main()