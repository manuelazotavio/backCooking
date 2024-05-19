import favModel from "../../models/favModel.js";

const remove = async (req, res) => {
  try {
    const receitaId = +req.params.id;
    const userId = req.body
    const result = await favModel.remove(receitaId, userId);
    if (result?.id) {
      res.json({
        success: `Favorito ${id} apagado com sucesso!`,
        favorito: result,
      });
    } else {
        return res.status(404).json({
            error: "Favorito não encontrado."
        })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Opsss erro no servidor, tente novamente!",
    });
  }
};

export default remove;
