import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         { published: true },
  //         {
  //           title: {
  //             contains: " title",
  //           },
  //         },
  //       ],
  //     },
  //   });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: " title",
          },
        },
        { published: true },
      ],
    },
  });

  console.log(orFiltering);
};

filtering();
