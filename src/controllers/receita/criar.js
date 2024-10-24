import zodErrorFormat from "../../helpers/zodErrorFormat.js";
import receitaModel from "../../models/receitaModel.js";

const criar = async(req, res) => {
    try {
        const receita = req.body;
        const foto = req.file ? `/uploads/${req.file.filename}` : null;

        // Verifica se a imagem foi enviada
        if (!foto) {
            return res.status(400).json({ error: "Imagem obrigatória." });
        }
        
        receita.imagem = foto;

        // Validação da receita
        const result = receitaModel.validateReceitaToCreate(receita);
        if (!result.success) {
            return res.status(400).json({
                error: "Dados inválidos.",
                fields: zodErrorFormat(result.error)
            });
        }

        // Criação da receita no banco
        const newReceita = await receitaModel.create(result.data);

        // Envia resposta de sucesso, apenas se todos os passos forem concluídos
        return res.json({
            success: 'Receita criada com sucesso!',
            receita: newReceita
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Ops, erro no servidor.'
        });
    }
}

export default criar;
