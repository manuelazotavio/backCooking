import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.resolve(__dirname, "../uploads"); // 
    if (!fs.existsSync(uploadPath)) {
      try {
        fs.mkdirSync(uploadPath, { recursive: true }); // Cria a pasta se não existir
      } catch (err) {
        return callback(err);
      }
    }
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();
    callback(null, `${time}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;