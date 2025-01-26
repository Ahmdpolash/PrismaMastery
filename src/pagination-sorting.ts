import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSoring = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });

  // cursor based pagination
  const cursorData = await prisma.post.findMany({
    skip: 3,
    take: 4,
    cursor: {
      id: 12,
    },
  });

  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    skip: 2,
    take: 2,
    where: {
      title: "New Post",
    },
  });

  console.log(sortedData);
};

paginationSoring();
