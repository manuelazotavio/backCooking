import receitaModel from "../../models/receitaModel"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const receita = await receitaModel.getById(+id)
        res.json({
            success: `Receita ${id} encontrado com sucesso!`,
            receita
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById