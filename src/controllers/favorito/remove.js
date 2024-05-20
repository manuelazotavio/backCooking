import favModel from "../../models/favModel.js";

const remove = async (req, res) => {
  try {
    const { userId, receitaId } = req.body.unique_receitaId_userId;
    const result = await favModel.remove({ receitaId, userId });
    if (result?.id) {
      res.json({
        success: `Favorito com receitaId ${receitaId} e userId ${userId} apagado com sucesso!`,
        favorito: result,
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