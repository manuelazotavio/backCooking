
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

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        console.error("Erro do multer:", err.message);
        return res.status(400).json({
            erro: true,
            mensagem: "Erro no multer: " + err.message,
        });
    } else if (err) {
        console.error("Erro desconhecido:", err.message);
        return res.status(400).json({
            erro: true,
            mensagem: "Erro desconhecido: " + err.message,
        });
    }
    next();
});


const uploadImagem = app;

export default uploadImagem;

