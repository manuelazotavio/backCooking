
import multer from "multer";

import path from "path";

import fs from "fs";



const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        const uploadPath = path.join('../uploads');

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

        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {

            cb(null, true);

        } else {

            cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);

        }

    }

});



export default upload;