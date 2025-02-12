import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const validToken = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.id;

    const user = await userModel.getById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await userModel.editPass(userId, hashedPassword);

    res.json({ message: "Senha redefinida com sucesso!" });
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.status(400).json({ error: "Token expirado." });
    }
    res.status(400).json({ error: "Token inválido." });
  }
};

export default validToken;
