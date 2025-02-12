import recipeModel from "../../models/recipeModel.js";

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await recipeModel.remove(+id);
    res.json({
      success: `Receita ${id} apagado com sucesso!`,
      recipe: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Opsss erro no servidor, tente novamente!",
    });
  }
};

export default remove;
