import recipeModel from "../../models/recipeModel.js";

const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const recipe = await recipeModel.getById(id);
    res.json({
      success: `Receita ${id} encontrada com sucesso!`,
      recipe,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Opsss erro no servidor, tente novamente!",
    });
  }
};

export default getById;
