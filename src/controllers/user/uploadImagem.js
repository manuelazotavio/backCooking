
import express from "express";
import upload from "../../middlewares/fileUpload.js";

const app = express();

app.use(express.json());

app.post("/upload", upload.single('imagem'), (req, res) => {
    console.log("Recebendo requisição...");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    if (req.file) {
        console.log("Arquivo recebido:", req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!",
        });
    }

    res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso.",
    });
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

