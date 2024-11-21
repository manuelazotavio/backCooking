import multer from "multer";

const fileUpload = (req, res, next) =>
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "../uploads/");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now().toString() + "_" + file.originalname);
      },
    }),
    fileFilter: (req, file, cb) => {
      const extensaoImg = ["image/png", "image/jpg", "image/jpeg"].find(
        (formatoAceito) => formatoAceito == file.mimetype
      );

      if (extensaoImg) {
        return cb(null, true);
      }

      return cb(null, false);
    },
  });

export default fileUpload;
