import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const app = express();

const uploadDir = path.join(__dirname, 'uploads');

// Verifica se o diretório existe e cria se não existir
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload;