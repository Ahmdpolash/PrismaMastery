import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuery = async () => {
  //fluent api
  // const result = await prisma.user
  //   .findUnique({
  //     where: { id: 1 },
  //   })
  //   .post();

  //conclude api
  const result = await prisma.user.findUnique({
    where: { id: 1 },
    include: { post: true },
  });

  // relational queries

  const publishedPosts = await prisma.user.findMany({
    include: {
      post: {
        where: { published: true },
      },
    },
  });
console.log(result)

  //console.dir(publishedPosts, { depth: Infinity });
};

relationalQuery();
