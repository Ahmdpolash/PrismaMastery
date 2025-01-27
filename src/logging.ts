import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query", e.query);
  console.log("Duration: ", e.duration, " ms");
  console.log("Date & Time: ", e.timestamp);
});

const logging = async () => {
  const getALlFromDb = await prisma.post.findMany();
};

logging();
