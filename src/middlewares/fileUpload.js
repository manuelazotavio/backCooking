import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.resolve("uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Cria a pasta se não existir
    }
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();
    callback(null, `${time}_${file.originalname}`);
  },
});

export default storage;
