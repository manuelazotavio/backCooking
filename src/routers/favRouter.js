import express from 'express'
import create from '../controllers/favorite/create.js'
import remove from '../controllers/favorite/remove.js'
import list from '../controllers/favorite/list.js'
import getById from '../controllers/favorite/getById.js'
import removeAll from '../controllers/favorite/removeAll.js'
import auth from '../middlewares/auth.js'


const router = express.Router()

router.get('/', auth, list)
router.delete('/', auth, remove)
router.post('/', auth, create)
router.get('/:userId/:recipeId', auth, getById);
router.delete('/all', removeAll)

export default router



