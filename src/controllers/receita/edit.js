import recipeModel from "../../models/recipeModel.js";

const edit = async (req, res) => {
  try {
    const id = +req.params.id;
    const recipe = req.body;

    recipe.rating = recipe.rating
      ? parseInt(recipe.rating, 10)
      : null;

    if (req.fileUrl) {
      recipe.image = req.fileUrl;
    }

    const newRecipe = await recipeModel.edit({ id, ...recipe });
    return res.json({
      success: "Receita editada com sucesso!",
      recipe: newRecipe,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Ops, erro no servidor.",
    });
  }
};

export default edit;
