import express from 'express'
import { signUp } from '../controllers/user.controller.js'
const router = express.Router()

// creating post route for user data posting
router.post('/post' , signUp)

export default router