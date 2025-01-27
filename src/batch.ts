import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransactions = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "jhankar mia",
      email: "jkir@ph.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updatedData);
};

batchTransactions();
