
import multer from "multer";

import path from "path";

import fs from "fs";



const __dirname = path.dirname(decodeURI(new URL(import.meta.url).pathname));

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        const uploadPath = path.join(__dirname, '../uploads');

        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);

    },

    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }

});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
      console.log("Arquivo sendo processado:", file);
      
      // Verifica as extensões permitidas
      const filetypes = /jpeg|jpg|png/;
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      
      // Verifica o tipo MIME
      const mimetype = file.mimetype === 'image/jpeg' || file.mimetype === 'image/png';

      if (extname && mimetype) {
          return cb(null, true); // Permite o upload
      } else {
          return cb(new Error('Apenas imagens no formato JPG ou PNG são permitidas!'));
      }
  },
});





export default upload;