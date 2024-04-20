import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const getAll = async () => {
    return await prisma.receita.findMany()
}

const getById = async (id) => {
    return await prisma.receita.findUnique({
        where: {
            id
        }
    })
}

const create = async (receita) => {
    return await prisma.receita.create({
        data: receita
    })
}

const remove = async (id) => {
    return await prisma.receita.delete({
        where: {
            id
        }
    })
}

const edit = async (receita) => {
    return await prisma.receita.update({
        where: {
            id: receita.id
        },
        data: receita
    })
}


export default {getAll, getById, create, remove, edit}