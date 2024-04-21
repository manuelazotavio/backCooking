import receitaModel from "../../models/receitaModel"

const create = async(req, res) => {
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


export default create