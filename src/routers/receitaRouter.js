import express from 'express'
import criar from '../controllers/receita/criar.js'
import getAll from '../controllers/receita/getAll.js'

const router = express.Router()

router.get('/', getAll)
// router.get('/:id', getById)
// router.put('/:id', update)
// router.delete('/:id', remove)
router.post('/', criar)

export default router



