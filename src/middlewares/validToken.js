import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'

const validToken = async (req, res) => {
    const { token, newPassword } = req.body;

    console.log(token, newPassword)
  
    try {
      // Verificar o token
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log(decoded)
      const userId = decoded.id;
      console.log(userId)
  
      // Atualizar a senha do usuário
      const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash da senha
      await userModel.editPass(userId, { pass: hashedPassword })
  
      res.json({ message: "Senha redefinida com sucesso!" });
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({ error: "Token expirado." });
      }
      res.status(400).json({ error: "Token inválido." });
    }
  };
  
  export default validToken;