import favModel from "../../models/favModel"

const criar = async(req, res) => {
    try{
        const favorito = req.body
        const newFavorito = await favModel.create(favorito)
        return res.json({
            success: 'Favoritado com sucesso!',
            favorito: newFavorito
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}


export default criar