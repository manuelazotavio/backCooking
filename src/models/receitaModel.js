import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const receitaSchema = z.object({
  id: z.any({
    required_error: "ID é obrigatório.",
  }),
  userId: z.any({
    required_error: "UserID é obrigatório.",
  }),
  imagem: z.string({
    required_error: "A imagem é obrigatória.",
    invalid_type_error: "A imagem deve ser uma string.",
  }),
  name: z.string({
      required_error: "Nome é obrigatório.",
      invalid_type_error: "O nome deve ser uma string.",
    })
    .min(3, { message: "O nome deve ter no mínimo 3 letras." })
    .max(200, { message: "O nome deve ter no máximo 200 caracteres." }),
  avaliacao: z.any({
      required_error: "Avaliação é obrigatório.",
    }),
  porcoes: z.union([z.string(), z.number()]).refine(
    (value) => {
      if (typeof value === "string") {
        return value.length >= 3 && value.length <= 30;
      } else if (typeof value === "number") {
        return value >= 3 && value <= 30;
      }
    },
    {
      message:
        "A porção deve ter no mínimo 3 caracteres e no máximo 30 caracteres.",
    }
  ),
  descricao: z
    .string({
      required_error: "Descrição é obrigatória.",
      invalid_type_error: "A descrição deve ser uma string.",
    })
    .min(3, { message: "A descrição deve ter no mínimo 3 letras." })
    .max(200, { message: "A descrição deve ter no máximo 200 caracteres." }),
  tempo: z.union([z.string(), z.number()]).refine(
    (value) => {
      if (typeof value === "string") {
        return value.length >= 1 && value.length <= 30;
      } else if (typeof value === "number") {
        return value >= 1 && value <= 30;
      }
    },
    {
      message:
        "O tempo deve ter no mínimo 3 caracteres e no máximo 30 caracteres.",
    }
  ),
  instrucao: z.union([z.string(), z.number()]).refine(
    (value) => {
      if (typeof value === "string") {
        return value.length >= 3 && value.length <= 400;
      } else if (typeof value === "number") {
        return value >= 3 && value <= 400;
      }
    },
    {
      message:
        "A instrução deve ter no mínimo 3 caracteres e no máximo 400 caracteres.",
    }
  ),
  ingredientes: z.union([z.string(), z.number()]).refine(
    (value) => {
      if (typeof value === "string") {
        return value.length >= 3 && value.length <= 400;
      } else if (typeof value === "number") {
        return value >= 3 && value <= 400;
      }
    },
    {
      message:
        "O ingrediente deve ter no mínimo 3 caracteres e no máximo 400 caracteres.",
    }
  ),
});

const validateReceitaToCreate = (receita) => {
  const partialReceitaSchema = receitaSchema.partial({ id: true });
  return partialReceitaSchema.safeParse(receita);
};

const validateReceitaToUpdate = (receita) => {
  const partialReceitaSchema = receitaSchema.partial({
    pass: true,
    userId: true,
  });
  return partialReceitaSchema.safeParse(receita);
};

const getAll = async (userId) => {
  return await prisma.receita.findMany({
    where: {
      userId,
    },
  });
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
    select: {
      id: true,
      name: true,
      avaliacao: true,
      porcoes: true,
      ingredientes: true,
      instrucao: true,
      descricao: true,
      tempo: true,
      imagem: true,
      favoritos: true,
      userId: true,
    },
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

export default {
  getAll,
  getById,
  create,
  remove,
  edit,
  validateReceitaToCreate,
  validateReceitaToUpdate,
};
