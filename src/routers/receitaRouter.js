import express from 'express';
import criar from '../controllers/receita/criar.js';
import listar from '../controllers/receita/listar.js';
import edit from '../controllers/receita/editar.js';
import remove from '../controllers/receita/remove.js';
import getById from '../controllers/receita/getById.js';
import auth from '../middlewares/auth.js';
import multer from 'multer';
import fileUploadMiddleware from '../middlewares/fileUpload.js';

const upload = multer({
    storage: multer.memoryStorage(),
  });
  
const router = express.Router()

router.get('/', auth, listar)
router.get('/:id', auth, getById)
router.put('/:id', auth, upload.single('imagem'), fileUploadMiddleware, edit)
router.delete('/:id', auth, remove)
router.post('/', auth, upload.single('imagem'), fileUploadMiddleware, criar)

export default router



