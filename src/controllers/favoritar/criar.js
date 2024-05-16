import receitaModel from "../../models/receitaModel.js"

const criar = async(req, res) => {
    try{
        const receita = req.body
        const newReceita = await receitaModel.create(receita)
        return res.json({
            success: 'Receita fabricada com sucesso!',
            receita: newReceita
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}


export default criar