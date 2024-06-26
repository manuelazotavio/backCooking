import receitaModel from "../../models/receitaModel.js"

const getById = async (req, res) => {
    try{
        const id = Number(req.params.id) 
        const receita = await receitaModel.getById(id)
        res.json({
            success: `Receita ${id} encontrada com sucesso!`, 
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