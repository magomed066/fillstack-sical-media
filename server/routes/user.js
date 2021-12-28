import express from 'express'
import UserController from '../controllers/User.js'

const router = express.Router()

router.post('/login', UserController.login)
router.post('/register', UserController.register)

export default router
