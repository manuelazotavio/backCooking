import favModel from "../../models/favModel"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await favModel.remove(+id)
        res.json({
            success: `Favorito ${id} apagado com sucesso!`,
            favorito: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove