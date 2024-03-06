import { Router } from "express";
import {register, login, logout, profile} from "../controllers/auth.controllers.js"
import { authRequired } from "../middlewares/validateToken.js";
import {validateSchema} from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema} from '../schemas/auth.shcema.js'
const router = Router()

router.post('/register', validateSchema(registerSchema), register) //ruta para registrar nuevos usuarios
router.post('/login', validateSchema(loginSchema), login) //ruta para iniciar sesion
router.post('/logout', logout) //ruta para cerrar sesion
router.get('/profile', authRequired, profile) 
export default router;