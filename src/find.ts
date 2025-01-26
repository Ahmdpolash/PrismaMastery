import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all

  const getAllPost = await prisma.post.findMany();

  //find first and firstFirstOrThrowError

  // const findPost = await prisma.post.findFirstOrThrow({
  //     where: {
  //         // id: 5
  //         published:false
  //     }
  // })

  //find unique
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 15,
    },
    select: {
      title: true,
      content: true,
    },
  });

  console.log(findUnique);
};

main();
