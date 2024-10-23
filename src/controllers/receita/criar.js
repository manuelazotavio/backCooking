import zodErrorFormat from "../../helpers/zodErrorFormat.js"
import receitaModel from "../../models/receitaModel.js"

const criar = async(req, res)  => {
    try{
        const receita = req.body
        const foto = req.file ? `/uploads/${req.file.filename}` : null;
        receita.imagem = foto
        if (!foto) {
            return res.status(400).json({ error: "Imagem obrigatória." });
          }
        const result = receitaModel.validateReceitaToCreate(receita)
        if(!result.success) {
            return res.status(400).json({
                error: "Dados inválidos.",
                fields: zodErrorFormat(result.error)
            })
        }
        const newReceita = await receitaModel.create(result.data)
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