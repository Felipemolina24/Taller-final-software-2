import jwt from "jsonwebtoken"

//Funcion para crear el token (recibe el id del usuario 'payload')
export function createAccessToken(payload) {

 return new Promise((resolve, reject) => {
    jwt.sign(
        payload,
        process.env.SECRET, //Clave secreta que viene de las variables de entorno .env
        {
            expiresIn: "24h"
        },
        (err, token) => {
            if (err) console.log(err);
            resolve(token)
        }
    )
  })
}