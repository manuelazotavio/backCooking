import favModel from "../../models/favModel.js";

const removeAll = async (req, res) => {
  try {

    const result = await favModel.removeAll();
    if (result) {
      res.json({
        success: `Favoritos apagados com sucesso!`,
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

export default removeAll;
