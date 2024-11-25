
import express from "express";
import multer from "multer";
import storage from '../../middlewares/fileUpload.js'


const upload = multer({ storage: storage});

const app = express();

app.use(express.json());

const uploadImagem = app.post("/upload", upload.single("imagem"), (req, res) => {
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

export default uploadImagem;