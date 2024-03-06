import express from "express";
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express() // instanciando express

app.use(cors()) // habilitando cors
app.use(express.json()) // habilitando json 
app.use(cookieParser()) // habilitando cookie-parser 
app.use("/api", authRoutes) // habilitando rutas de autenticacion


export default app