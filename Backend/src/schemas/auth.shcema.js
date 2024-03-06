//schemas para las validaciones de datos de autenticacion

import { z } from 'zod'

export const registerSchema = z.object({
    usuario: z.string({
        required_error: 'El usuario es requerido',
    }),
    email: z.string({
        required_error: 'El email es requerido',
    }).email({
        message: 'El email es invalido'
    }),
    password: z.string({
        required_error: 'El password es requerido',
    }).min(6, {
        message: 'El password debe ser de al menos 6 caracteres'
    })
})


export const loginSchema = z.object({
    email: z.string({
        required_error: 'El email es requerido',
    }).email({
        message: 'El email es invalido'
    }),
    password: z.string({
        required_error: 'El password es requerido',
    })
})