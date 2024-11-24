
import express from "express";
import upload from "../../middlewares/fileUpload.js";

const app = express();

app.use(express.json());

app.post("/upload", upload.single('imagem'), async (req, res) => {

    if (req.file) {
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
    });

});

const uploadImagem = app;

export default uploadImagem;

