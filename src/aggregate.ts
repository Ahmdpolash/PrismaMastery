import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
  const avgAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  const sum = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //find count of age fields
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  // find count of records
  const countData = await prisma.user.count();

  // find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
    
  // find max age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};

aggregate();
