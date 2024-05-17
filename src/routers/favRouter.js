import express from 'express'
import criar from '../controllers/favorito/criar.js'
import remove from '../controllers/favorito/remove.js'
import listar from '../controllers/favorito/listar.js'
import getById from '../controllers/favorito/getById.js'


const router = express.Router()

router.get('/', listar)
router.delete('/:id', remove)
router.post('/', criar)
router.get('/favorito/:userId/:receitaId', getById);

export default router



