import favModel from "../../models/favModel.js"

const list = async(req, res) => {
    try{
        const userId = req.userLogged.id
        const favorite = await favModel.getAll(userId)
        return res.json({
            success: 'Favoritos listados com sucesso!',
            favorite
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}


export default list