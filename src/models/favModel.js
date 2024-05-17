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

const remove = async (favorito) => {
    return await prisma.favorito.delete({
        where: {
            id
        }
    })
}

const getAll = async () => {
    return await prisma.favorito.findMany();
  };

export default {create, remove, getAll}