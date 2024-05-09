import receitaModel from "../../models/receitaModel"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await receitaModel.remove(+id)
        res.json({
            success: `Receita ${id} apagado com sucesso!`,
            receita: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default remove