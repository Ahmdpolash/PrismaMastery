import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "polash ahmed",
  //     email: "polash@example.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software engineer",
  //   },
  // });


  const createPost = await prisma.post.create({
    data: {
      title: 'this is title',
      content: 'this is content',
      authorId: 1,
      postCategory: {
        create: {
          categoryId:1
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // }
        }
      }
    },
    include: {
      postCategory:true
    }
  })

  console.log(createPost);
};

main();
