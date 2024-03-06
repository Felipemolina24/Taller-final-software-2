import React, { useEffect } from 'react';
import "./login.css";
import {useForm} from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Login() {

    //Biblioteca para la gestión de formularios
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {login, isAuthenticated, error} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated){
            navigate("/dashboard")
        }
    })



    //Función para enviar el formulario a la API
    const onSubmit = handleSubmit( async (values) => {
        login(values)
    })

    return (
        <>
        <div className='container'>
            <div className="login-container">
                <h2>Iniciar sesión</h2>

                {
                    error.map((err, index) => (
                        <div key={index}>
                            <span style={{color: 'red'}}>{err}</span>
                         
                        </div>
                        
                    ))
                }
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" {...register("email", {required: true})}  placeholder="Ingrese su Email"  />
                        {
                            errors.email && <span style={{color: 'red'}}>El email es obligatorio</span>
                        }
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" {...register("password", {required: true})} placeholder="Ingrese su contraseña"  />
                        {
                            errors.password && <span style={{color: 'red'}}>La contraseña es obligatoria</span>
                        }
                    </div>
                    <button type="submit"> Iniciar Sesión</button>
                </form>
            </div>
            </div>
        </>
    )
}