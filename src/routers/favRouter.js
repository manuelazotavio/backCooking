import express from 'express'
import criar from '../controllers/favorito/criar.js'
import remove from '../controllers/favorito/remove.js'
import listar from '../controllers/favorito/listar.js'


const router = express.Router()

router.get('/', listar)
router.delete('/:id', remove)
router.post('/', criar)

export default router



