import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async (favorite) => {

  return await prisma.favorite.create({
    data: {
      recipe: {
        connect: {
          id: favorite.recipeId,
        },
      },
      user: {
        connect: {
          id: favorite.userId,
        },
      },
    },
  });
};

const getFavorite = async (userId, recipeId) => {
  return await prisma.favorite.findFirst({
    where: {
      userId,
      recipeId,
    },
  });
};

const remove = async ({ userId, recipeId }) => {
  return await prisma.favorite.delete({
    where: {
      unique_recipeId_userId: {
        userId: Number(userId),
        recipeId: Number(recipeId),
      },
    },
  });
};

const getAll = async (userId) => {
  return await prisma.favorite.findMany({
    where: {
      userId,
    },
  });
};

const removeAll = async () => {
  return await prisma.favorite.deleteMany();
};

export default { create, remove, getAll, getFavorite, removeAll };
