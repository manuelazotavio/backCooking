import favModel from "../../models/favModel.js"

const getById = async(req, res) => {
    try{
        const userId = Number(req.params.userId);
        const recipeId = Number(req.params.recipeId);
        const favorite = await favModel.getFavorite(userId, recipeId);
        if (favorite?.id) {
            return res.json({
            success: 'Favorito listado com sucesso!',
            favorite
        })
    } else {
        return res.status(404).json({
            error: "Não favoritado"
        })
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}

export default getById