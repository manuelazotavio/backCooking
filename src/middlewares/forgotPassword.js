import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import userModel from "../models/userModel.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey("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");

const forgotPassword = async (req, res) => {
  const { email } = req.body;

 
  const user = await userModel.getByEmail({ email }); 
  if (!user) {
    return res.status(404).json({ error: "E-mail não encontrado." });
  }

 
  const resetToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "15m" });

  
  const resetLink = `https://seusite.com/reset-password?token=${resetToken}`;
  const msg = {
    to: email,
    from: "guardareceita@gmail.com",
    subject: "Recuperação de Senha",
    text: `Clique no link para redefinir sua senha: ${resetLink}`,
    html: `<p>Clique no link para redefinir sua senha: <a href="${resetLink}">Redefinir Senha</a></p>`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: "E-mail de recuperação enviado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar o e-mail." });
  }
};

export default forgotPassword;