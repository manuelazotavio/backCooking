
import express from "express";
import multer from "multer";
import { storage } from '../../middlewares/fileUpload.js'


const upload = multer({ storage: storage});

const app = express();

app.use(express.json());

app.post("/upload", upload.single('imagem'), (req, res) => {
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


export default uploadImagem;

