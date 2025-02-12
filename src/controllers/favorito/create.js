import favModel from "../../models/favModel.js";

const create = async (req, res) => {
  try {
    const { recipeId, userId } = req.body;
    const newFavorite = await favModel.create({
      recipeId,
      userId,
    })
    console.log(newFavorite);
    return res.json({
      success: "Favoritado com sucesso!",
      favorite: newFavorite,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Ops, erro no servidor.",
    });
  }
};

export default create;
