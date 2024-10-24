import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const __dirname = path.resolve();
const uploadDir = path.join(__dirname, 'uploads');

// Verifica e cria o diretório se ele não existir
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + file.originalname);
    },
});


const upload = multer({ storage: storage });

export default upload;
