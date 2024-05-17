import receitaModel from "../../models/receitaModel.js"

const getById = async (req, res) => {
    try{
        const userId = Number(req.params.userId)
        const receita = await receitaModel.getById(userId)
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