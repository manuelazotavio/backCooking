import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import userModel from "../models/userModel.js";
import { API_KEY } from "../config.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(API_KEY);

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log(email)
 
  const user = await userModel.getByEmail( email ); 
  console.log(user)
  if (!user) {
    return res.status(404).json({ error: "E-mail não encontrado." });
  }

 
  const resetToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "15m" });

  
  const resetLink = `exp://192.168.0.125:8081/--/reset-password?token=${resetToken}`;
  const msg = {
    to: email,
    from: "guardareceita@gmail.com",
    subject: "Recuperação de Senha",
    html: `<p>Clique no link para redefinir sua senha: ${resetLink}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: "E-mail de recuperação enviado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar o e-mail." });
  }
};

export default forgotPassword;