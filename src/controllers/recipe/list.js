import recipeModel from "../../models/recipeModel.js";

const list = async (req, res) => {
  try {
    const userId = req.userLogged.id;
    const recipe = await recipeModel.getAll(userId);
    return res.json({
      success: "Receitas listadas com sucesso!",
      recipe
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Ops, erro no servidor.",
    });
  }
};

export default list;
