import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'

const validToken = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
      // Verificar o token
      const decoded = jwt.verify(token, SECRET_KEY);
      const userId = decoded.id;
      const user = await userModel.getById(userId)
   
      // Atualizar a senha do usuário
      const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash da senha
      await userModel.editPass(user, { pass: hashedPassword })
  
      res.json({ message: "Senha redefinida com sucesso!" });
    } catch (error) {
      console.log(error)
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({ error: "Token expirado." });
      }
      res.status(400).json({ error: "Token inválido." });
    }
  };
  
  export default validToken;