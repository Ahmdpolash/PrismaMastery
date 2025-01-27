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

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "this",
          },
        },
      ],
    },
  });
    
    
    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'p'
            }
        }
    })
    
    
  console.log(startsWith);
};

filtering();
