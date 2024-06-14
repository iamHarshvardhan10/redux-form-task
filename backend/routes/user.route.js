import express from 'express'
import { signUp , login } from '../controllers/user.controller.js'
const router = express.Router()

// creating post route for user data posting
router.post('/signUP' , signUp)
router.post('/login' , login)

export default router