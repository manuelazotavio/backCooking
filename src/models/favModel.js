import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = async (favorito) => {
    console.log(favorito)
    return await prisma.favorito.create({
        data: {
            receita: {
                connect: {
                    id: favorito.receitaId
                }
            },
            user: {
                connect: {
                    id: favorito.userId
                }
            }
        }
    })
}

const getFavorito = async (userId, receitaId) => {
    return await prisma.favorito.findFirst({
        where: {
            userId,
            receitaId
        },
    });
};


const remove = async ({userId, receitaId}) => {
    return await prisma.favorito.delete({
        where: {
            unique_receitaId_userId: {
                userId: Number(userId),
                receitaId: Number(receitaId)
            }
        }
    })
}

const getAll = async () => {
    return await prisma.favorito.findMany();
  };

  const removeAll = async () => {
    return await prisma.favorito.deleteMany();
  }

export default {create, remove, getAll, getFavorito, removeAll}