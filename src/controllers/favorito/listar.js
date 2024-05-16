import favModel from "../../models/favModel"

const listar = async(req, res) => {
    try{
        const favorito = await favModel.getAll()
        return res.json({
            success: 'Favoritos listados com sucesso!',
            favorito
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}


export default listar