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

        if (req.file) {
            // Processar o arquivo
            res.send('Upload bem-sucedido');
        } else {
            res.status(400).send('Erro: Nenhum arquivo enviado ou nome do campo incorreto');
        }

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
