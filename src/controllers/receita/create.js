import zodErrorFormat from "../../helpers/zodErrorFormat.js";
import recipeModel from "../../models/recipeModel.js";

const create = async (req, res) => {
  try {
    const recipe = req.body;

    recipe.userId = recipe.userId ? parseInt(recipe.userId, 10) : null;
    recipe.rating = recipe.rating ? parseInt(recipe.rating, 10) : null;
    recipe.image = req.fileUrl;

    const result = recipeModel.validateRecipeToCreate(recipe);

    if (!result.success) {
      return res.status(400).json({
        error: "Dados inválidos.",
        fields: zodErrorFormat(result.error),
      });
    }

    const newRecipe = await recipeModel.create(result.data);

    return res.json({
      success: "Receita criada com sucesso!",
      recipe: newRecipe,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Ops, erro no servidor.",
    });
  }
};

export default create;
