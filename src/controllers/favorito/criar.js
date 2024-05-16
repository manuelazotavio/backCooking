import favModel from "../../models/favModel.js"

const criar = async(req, res) => {
    try{

        const { receitaId } = req.body
        const newFavorito = await favModel.create({
            data: {
                receita: {
                    connect: {
                        id: receitaId
                    }
                }
            }
        })
        console.log(favorito)
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