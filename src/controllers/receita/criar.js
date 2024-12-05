import zodErrorFormat from "../../helpers/zodErrorFormat.js";
import receitaModel from "../../models/receitaModel.js";

const criar = async (req, res) => {
  try {
    const receita = req.body;

    // Converte userId e avaliacao para inteiros, se existirem
    receita.userId = receita.userId ? parseInt(receita.userId, 10) : null;
    receita.avaliacao = receita.avaliacao ? parseInt(receita.avaliacao, 10) : null;

    const foto = req.fileUrl; // URL da imagem enviada pelo middleware

    // Verifica se a imagem foi enviada
    if (!foto) {
      return res.status(400).json({ error: "Imagem obrigatória." });
    }

    receita.imagem = foto; // Atribui a URL da imagem ao objeto receita

    // Validação da receita
    const result = receitaModel.validateReceitaToCreate(receita);
    if (!result.success) {
      return res.status(400).json({
        error: "Dados inválidos.",
        fields: zodErrorFormat(result.error),
      });
    }

    // Criação da receita no banco
    const newReceita = await receitaModel.create(result.data);

    // Resposta de sucesso
    return res.json({
      success: 'Receita criada com sucesso!',
      receita: newReceita,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Ops, erro no servidor.',
    });
  }
};

export default criar;
