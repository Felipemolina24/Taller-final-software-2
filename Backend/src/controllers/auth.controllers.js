import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccessToken } from "../libs/jwt.js"

//Controlador para registrar un nuevo usuario
export const register = async (req, res) => {
    //Recibir los datos desde el cuerpo de la solictud
    const { usuario, email, password } = req.body

    const user = await User.findOne({ email })

    //Manejador de errores
    try {

        if ( user) return res.status(400).json(["El correo ya se encuentra registrado"])

        //se encripta la contraseña con la biblioteca bcrypt
        const encryptedPassword = await bcrypt.hash(password, 10)
        //se crea un objeto 
        const newUser = new User({
            usuario,
            email,
            password: encryptedPassword
        })
        //se guardan los datos de la instancia 
        const usuarioNuevo = await newUser.save()
        //se establece en token lo que devuelve el metodo createAccessToken
        //en este caso el id del usuario
        const token = await createAccessToken(
            {
                id: usuarioNuevo._id,
            })
        //se establece el token en la cookie
        res.cookie('token', token)
        //se envia la respuesta
        res.json({
            id: usuarioNuevo._id,
            usuario: usuarioNuevo.usuario,
            email: usuarioNuevo.email
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

//Controlador para iniciar sesion
export const login = async (req, res) => {
    //Recibir los datos desde el cuerpo de la solictud
    const { email, password } = req.body

    try {
   
        //Buscamos el usuario en la base de datos por email
        const userFound = await User.findOne({ email })

        //si el usuario no existe devolvemos un mensaje
        if (!userFound) return res.status(400).json(["Usuario no encontrado"] )

        //comparamos la contraseña encriptada de la base de datos con la introducida por el usuario
        const isMatch = await bcrypt.compare(password, userFound.password)

        //si la contraseña no coincide devolvemos un mensaje
        if (!isMatch) return res.status(400).json( ["Contraseña incorrecta"] )

        //si el usuario existe y la contraseña coincide creamos el token
        const token = await createAccessToken(
            {
                id: userFound._id,
            })
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            usuario: userFound.usuario,
            email: userFound.email
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }




}

//Controlador para cerrar sesion
export const logout = (req, res) => {
    //Se elimina el token
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}


export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    
    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" })

    return res.json({
        id: userFound._id,
        user: userFound.usuario,
        email: userFound.email
    })
    
}