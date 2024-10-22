import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const app = express();

const UPLOADS_FOLDER = "uploads";

// Cria a pasta de destino se ela não existir
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOADS_FOLDER);
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    // Permitir apenas arquivos de imagem
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de arquivo não suportado. Apenas imagens são permitidas.'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limite de tamanho do arquivo: 5MB
    },
    fileFilter: fileFilter
});

export default upload;