import app from "./app.js"
import {coonectDB} from "./db.js"
import dotenv from "dotenv"


dotenv.config()
coonectDB()


app.listen(process.env.PORT)
console.log('server on port ', process.env.PORT);