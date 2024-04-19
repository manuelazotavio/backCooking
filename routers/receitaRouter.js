import express from 'express'
import getAll from '../controllers/receita/getAll'
import create from '../controllers/receita/create'
import getById from '../controllers/receita/getById'
import update from '../controllers/receita/update'
import remove from '../controllers/receita/remove'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getById)
router.put('/:id', update)
router.delete('/:id', remove)
router.post('/', create)

export default router



