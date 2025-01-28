import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // query one
    const getAllPost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    //query two

    const countUser = await transactionClient.user.count();

    //query three

    const updateUser = await transactionClient.user.upsert({
      where: {
        id: 80,
      },
      update: {
        age: 45,
      },
      create: {
        username: "newUser",
        email: "newUser@gmail.com",
      },
    });

    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });
    console.log(result);
    


};

interactiveTransaction();
