import mongoose from "mongoose";

//schema del usuario
const userSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        trim: true //eliminar espacios "--" (--user--)
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }
})

//exportar el modelo como "User"
export default mongoose.model( 'User', userSchema)