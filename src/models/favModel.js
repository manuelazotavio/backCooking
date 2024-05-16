import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = async (favorito) => {
    console.log(favorito)
    return await prisma.favorito.create({
        data: favorito
    })
}

const remove = async (favorito) => {
    return await prisma.favorito.delete({
        where: {
            id
        }
    })
}

export default {create, remove}