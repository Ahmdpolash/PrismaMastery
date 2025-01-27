import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const practice = async () => {
  // insert
  //   const addData = await prisma.practice.createMany({
  //     data: [
  //       {
  //         name: "polash",
  //         email: "polash@prisma.com",
  //       },
  //       {
  //         name: "akash",
  //         email: "akash@prisma.com",
  //       },
  //     ],
  //   });

  //   const getData = await prisma.practice.findFirst();

  //   const deleteData = await prisma.practice.delete({
  //     where: { id: 15 },
  //   });

  //   const updateData = await prisma.practice.update({
  //     where: { id: 20 },
  //     data: {
  //       name: "john",
  //     },
  //   });

  //   const update = await prisma.practice.upsert({
  //     where: { id: 150 },
  //     update: { name: "bob" },
  //     create: { name: "alice", email: "alice@gmail.com" },
  //   });

  const offsetData = await prisma.practice.findMany({
    skip: 1,
    take: 10,
    cursor: {
      id: 28,
    },
  });

  console.log(offsetData);
};

practice();
