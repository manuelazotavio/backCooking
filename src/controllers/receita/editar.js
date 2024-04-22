import receitaModel from "../../models/receitaModel.js"

const edit = async(req, res) => {
    try{
        const id = req.params
        const receita = req.body
        const newReceita = await receitaModel.edit(receita, id)
        return res.json({
            success: 'Receita editada com sucesso!',
            receita: newReceita
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        })
    }
}


export default edit