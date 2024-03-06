import jwt from 'jsonwebtoken';

export const authRequired = (req, res, next) => {

    const { token } = req.cookies

    if (!token)
        return res.status(401).json({ message: "Token invalido, unauthorized" })

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Token invalido" })

        req.user = user
    })


    next();
}