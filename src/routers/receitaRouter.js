import express from 'express'
import criar from '../controllers/receita/criar.js'
import listar from '../controllers/receita/listar.js'
import edit from '../controllers/receita/editar.js'

const router = express.Router()

router.get('/', listar)
// router.get('/:id', getById)
router.put('/:id', edit)
router.delete('/:id', remove)
router.post('/', criar)

export default router



