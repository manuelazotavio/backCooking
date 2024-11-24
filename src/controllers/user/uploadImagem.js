
import express from "express";
import upload from "../../middlewares/fileUpload.js";

const app = express();

app.use(express.json());

app.post("/upload", upload.single('imagem'), async (req, res) => {
    try {
        console.log("Recebendo requisição de upload...");

        if (req.file) {
            console.log("Arquivo recebido:", req.file);
            console.log("Corpo da requisição:", req.body);
            return res.json({
                erro: false,
                mensagem: "Upload realizado com sucesso!",
            });
        }
    } catch (err) {
        console.error("Erro no upload:", err.message);
        return res.status(400).json({
            erro: true,
            mensagem: "Erro no upload: " + err.message,
        });
    }
});


const uploadImagem = app;

export default uploadImagem;

