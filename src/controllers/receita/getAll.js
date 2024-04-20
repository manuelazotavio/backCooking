import receitaModel from "../../models/receitaModel.js"

const getAll = async(req, res) => {
    try{
        const receita = receitaModel.getAll()
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


export default getAll