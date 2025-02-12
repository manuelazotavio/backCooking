import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const recipeSchema = z.object({
  id: z.any({
    required_error: "ID é obrigatório.",
  }),
  userId: z.any({
    required_error: "UserID é obrigatório.",
  }),
  image: z.string({
    required_error: "A imagem é obrigatória.",
    invalid_type_error: "A imagem deve ser uma string.",
  }),
  name: z.string({
      required_error: "Nome é obrigatório.",
      invalid_type_error: "O nome deve ser uma string.",
    })
    .min(3, { message: "O nome deve ter no mínimo 3 letras." })
    .max(200, { message: "O nome deve ter no máximo 200 caracteres." }),
  rating: z.any({
      required_error: "Avaliação é obrigatório.",
    }),
  portions: z.union([z.string(), z.number()]).refine(
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
  description: z
    .string({
      required_error: "Descrição é obrigatória.",
      invalid_type_error: "A descrição deve ser uma string.",
    })
    .min(3, { message: "A descrição deve ter no mínimo 3 letras." })
    .max(200, { message: "A descrição deve ter no máximo 200 caracteres." }),
  time: z.union([z.string(), z.number()]).refine(
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
  instruction: z.union([z.string(), z.number()]).refine(
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
  ingredients: z.union([z.string(), z.number()]).refine(
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

const validateRecipeToCreate = (recipe) => {
  const partialRecipeSchema = recipeSchema.partial({ id: true });
  return partialRecipeSchema.safeParse(recipe);
};

const validateRecipeToUpdate = (recipe) => {
  const partialRecipeSchema = recipeSchema.partial({
    pass: true,
    userId: true,
  });
  return partialRecipeSchema.safeParse(recipe);
};

const getAll = async (userId) => {
  return await prisma.recipe.findMany({
    where: {
      userId,
    },
  });
};

const getById = async (id) => {
  return await prisma.recipe.findUnique({
    where: {
      id,
    },
  });
};

const create = async (recipe) => {
  return await prisma.recipe.create({
    data: recipe,
    select: {
      id: true,
      name: true,
      rating: true,
      portions: true,
      ingredients: true,
      instruction: true,
      description: true,
      time: true,
      image: true,
      favorites: true,
      userId: true,
    },
  });
};

const remove = async (id) => {
  return await prisma.recipe.delete({
    where: {
      id,
    },
  });
};

const update = async (recipe) => {
  return await prisma.recipe.update({
    where: {
      id: recipe.id,
    },
    data: recipe,
  });
};

export default {
  getAll,
  getById,
  create,
  remove,
  update,
  validateRecipeToCreate,
  validateRecipeToUpdate,
};
