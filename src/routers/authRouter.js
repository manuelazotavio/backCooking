import express from 'express'
import login from '../controllers/auth/login.js'
import logout from '../controllers/auth/logout.js'
import forgotPassword from '../middlewares/forgotPassword.js'
import auth from '../middlewares/auth.js'
import refreshToken from '../controllers/auth/refreshToken.js'
import validToken from '../middlewares/validToken.js'

const router = express.Router()

router.post('/login', login)
router.post('/redefinir-senha', forgotPassword)
router.post('/verify-token', validToken)
router.post('/logout', auth, logout)
router.post('/refresh-token', refreshToken)

export default router