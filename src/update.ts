import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const singleUpdate = await prisma.post.update({
    where: { id: 1 },
    data: { title: "Updated Post Title", authorName: "mr bean" },
  });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "first title 2",
    },
    data: { published: true },
  });
    
    
      // update data using upsert
  const upsertData = await prisma.post.upsert({
    where: { id: 11 },
    update: { authorName: "Polash" },
    create: { title: "New Post", content: "New Content" },
  });


};

main();
