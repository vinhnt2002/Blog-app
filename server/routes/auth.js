import express from "express"

const router = express.Router()
import {register, login, logout} from "../controllers/authController.js"

// this will receip the route and do function in controller 
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router;