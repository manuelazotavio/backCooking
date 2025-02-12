import favModel from "../../models/favModel.js";

const remove = async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    const result = await favModel.remove({ recipeId, userId });
    if (result?.id) {
      res.json({
        success: `Favorito com receitaId ${recipeId} e userId ${userId} apagado com sucesso!`,
        favorite: result,
      });
    } else {
      return res.status(404).json({
        error: "Favorito não encontrado.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Opsss erro no servidor, tente novamente!",
    });
  }
};

export default remove;