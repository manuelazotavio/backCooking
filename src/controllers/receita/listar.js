import receitaModel from "../../models/receitaModel.js"

const listar = async(req, res) => {
    try{
        const receita = await receitaModel.getAll()
        return res.json({
            success: 'Receitas listadas com sucesso!',
            receita: receita
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}


export default listar