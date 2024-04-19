import receitaModel from "../../models/receitaModel.js"

const update = async(req, res) => {
    try{
        const id = req.params
        const data = req.body 
        const newReceita = receitaModel.edit(id, data)
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


export default update