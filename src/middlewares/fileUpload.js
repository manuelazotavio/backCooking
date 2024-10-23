import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

export default upload