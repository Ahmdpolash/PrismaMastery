import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      { title: "Post 1", content: "Content 1", authorName: "polash ahmed" },
      { title: "Post 2", content: "Content 2", authorName: "akash ahmed" },
      { title: "Post 3", content: "Content 3", authorName: "x ahmed" },
    ],
  });

  console.log(createMany);
};

main();
