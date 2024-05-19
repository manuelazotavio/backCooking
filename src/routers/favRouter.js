import express from 'express'
import criar from '../controllers/favorito/criar.js'
import remove from '../controllers/favorito/remove.js'
import listar from '../controllers/favorito/listar.js'
import getById from '../controllers/favorito/getById.js'
import removeAll from '../controllers/favorito/removeAll.js'
import auth from '../middlewares/auth.js'


const router = express.Router()

router.get('/', auth, listar)
router.delete('/', auth, remove)
router.post('/', auth, criar)
router.get('/:userId/:receitaId', auth, getById);
router.delete('/', removeAll)

export default router



