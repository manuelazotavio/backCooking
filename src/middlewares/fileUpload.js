
import multer from "multer";

import path from "path";

import fs from "fs";



const __dirname = path.dirname(new URL(import.meta.url).pathname);

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

});



export default upload;