import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //single delete
  //   const singleDelete = await prisma.post.delete({
  //     where: { id: 3},
  //   });

  //multiple delete
  //   const multipleDelete = await prisma.post.deleteMany();

    
    // update data using upsert
  const upsertData = await prisma.post.upsert({
    where: { id: 11 },
    update: { authorName: "Polash" },
    create: { title: "New Post", content: "New Content" },
  });

  console.log(upsertData);
};

main();
