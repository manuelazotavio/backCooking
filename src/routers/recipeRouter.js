import express from 'express';
import create from '../controllers/recipe/create.js';
import list from '../controllers/recipe/list.js';
import update from '../controllers/recipe/update.js';
import remove from '../controllers/recipe/remove.js';
import getById from '../controllers/recipe/getById.js';
import auth from '../middlewares/auth.js';
import multer from 'multer';
import fileUploadMiddleware from '../middlewares/fileUpload.js';

const upload = multer({
    storage: multer.memoryStorage(),
  });
  
const router = express.Router()

router.get('/', auth, list)
router.get('/:id', auth, getById)
router.put('/:id', auth, upload.single('image'), fileUploadMiddleware, update)
router.delete('/:id', auth, remove)
router.post('/', auth, upload.single('image'), fileUploadMiddleware, create)

export default router



