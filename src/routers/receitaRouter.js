import express from 'express';
import criar from '../controllers/receita/criar.js';
import listar from '../controllers/receita/listar.js';
import edit from '../controllers/receita/editar.js';
import remove from '../controllers/receita/remove.js';
import getById from '../controllers/receita/getById.js';
import auth from '../middlewares/auth.js';
import storage from "../middlewares/fileUpload.js";
import multer from 'multer';

const upload = multer({ storage: storage});
const router = express.Router()

router.get('/', auth, listar)
router.get('/:id', auth, getById)
router.put('/:id', auth, upload.single('imagem'), edit)
router.delete('/:id', auth, remove)
router.post('/', auth, upload.single('imagem'), criar)

export default router



