import favModel from "../../models/favModel.js"

const getById = async(req, res) => {
    try{
        const userId = Number(req.params.userId);
        const receitaId = Number(req.params.receitaId);
        const favorito = await favModel.getFavorito(userId, receitaId);
        return res.json({
            success: 'Favorito listado com sucesso!',
            favorito
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}

export default getById