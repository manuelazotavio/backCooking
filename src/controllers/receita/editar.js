import receitaModel from "../../models/receitaModel.js"
import fs from 'fs'


const edit = async(req, res) => {
    try{
       
        const id = +req.params.id
        const receita = req.body
        const foto = req.file?.path;
        receita.imagem = foto;

        
        const receitaExistente = await receitaModel.getById();
        
        if (foto) {
            if (receitaExistente[0].imagem !== foto) {
                fs.unlinkSync(receitaExistente[0].imagem);
            }
        }


        const newReceita = await receitaModel.edit({id, ...receita})
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