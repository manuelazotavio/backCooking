import favModel from "../../models/favModel.js";

const criar = async (req, res) => {
  try {
    const { receitaId, userId } = req.body;
    const newFavorito = await favModel.create({
      receitaId,
      userId,
    })
    console.log(newFavorito);
    return res.json({
      success: "Favoritado com sucesso!",
      favorito: newFavorito,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Ops, erro no servidor.",
    });
  }
};

export default criar;
