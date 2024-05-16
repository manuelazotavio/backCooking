import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const receitaSchema = z.object({
  id: z.number({
    required_error: "ID é obrigatório.",
    invalid_type_error: "O ID deve ser um número inteiro.",
  }),
  name: z.string({
      required_error: "Nome é obrigatório.",
      invalid_type_error: "O nome deve ser uma string.",
    })
    .min(3, { message: "O nome deve ter no mínimo 3 letras." })
    .max(200, { message: "O nome deve ter no máximo 200 caracteres." }),
  avaliacao: z.number({
      required_error: "Avaliação é obrigatório."
    })
    .min(1, { message: "A avaliação deve ter no mínimo 1 número." })
    .max(200, { message: "A avaliação deve ter no máximo 2 números." }),
    porcoes: z.string({
        required_error: "Porção é obrigatório."
      }).min(3, { message: "A porção deve ter no mínimo 3 caracteres." })
        .max(30, { message: "A porção deve ter no máximo 30 caracteres." }),
  descricao: z.string({
        required_error: "Descrição é obrigatória.",
        invalid_type_error: "A descrição deve ser uma string.",
      })
      .min(3, { message: "A descrição deve ter no mínimo 3 letras." })
      .max(200, { message: "A descrição deve ter no máximo 200 caracteres." }),
      tempo: z.string({
        required_error: "Tempo é obrigatório."
      }).min(3, { message: "O tempo deve ter no mínimo 3 caracteres." })
        .max(30, { message: "O tempo deve ter no máximo 30 caracteres." }),
    instrucao: z.string({
            required_error: "Instrução é obrigatória.",
            invalid_type_error: "A instrução deve ser uma string.",
          })
          .min(3, { message: "A instrução deve ter no mínimo 3 letras." })
          .max(400, { message: "A instrução deve ter no máximo 200 caracteres." }),
          ingredientes: z.string({
            required_error: "Ingrediente é obrigatório."
          }).min(3, { message: "O ingrediente deve ter no mínimo 3 caracteres." })
            .max(400, { message: "O ingrediente deve ter no máximo 400 caracteres." })
  
});

const getAll = async () => {
  return await prisma.receita.findMany();
};

const getById = async (id) => {
  return await prisma.receita.findUnique({
    where: {
      id,
    },
  });
};

const create = async (receita) => {
  return await prisma.receita.create({
    data: receita,
  });
};

const remove = async (id) => {
  return await prisma.receita.delete({
    where: {
      id,
    },
  });
};

const edit = async (receita) => {
  return await prisma.receita.update({
    where: {
      id: receita.id,
    },
    data: receita,
  });
};

export default { getAll, getById, create, remove, edit };
