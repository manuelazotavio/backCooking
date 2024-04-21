import express from 'express'
import create from '../controllers/receita/create.js'
import getAll from '../controllers/receita/getAll.js'

const router = express.Router()

router.get('/', getAll)
// router.get('/:id', getById)
// router.put('/:id', update)
// router.delete('/:id', remove)
router.post('/', create)

export default router



