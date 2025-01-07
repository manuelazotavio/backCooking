import receitaModel from "../../models/receitaModel.js"
import fs from 'fs'


const edit = async(req, res) => {
    try{
       
        const id = +req.params.id
        const receita = req.body

        receita.avaliacao = receita.avaliacao ? parseInt(receita.avaliacao, 10) : null;
      
        if(req.fileUrl){
            receita.imagem = req.fileUrl; 
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