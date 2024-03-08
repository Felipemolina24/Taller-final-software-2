import React, { useEffect } from 'react';
import "./register.css";
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import AnimatedR from "./animationR/animatedR";

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { registerUser, isAuthenticated, error } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    });

    const onSubmit = handleSubmit(async (values) => {
        await registerUser(values);
    });

    return (
        <div className="wrapper">
            <div className="wrapper-basic wrapper-left">
                <form onSubmit={onSubmit} className="form">
                    <h3 className="title-register">Regístrate</h3>
                    <p className="subtext-register">
                        No es difícil, sólo tienes que introducir unos datos y ¡listo!
                    </p>
                    <div className="container-align">
                        <div className="inputs-container">
                            <p>Nombre</p>
                            <div className="input-box">
                                <input type="text" {...register("usuario", { required: true })} placeholder="Ingresa tu nombre" />
                                <FaUser className="icon" />
                                {
                                    errors.usuario && (
                                        <p style={{ color: 'red' }} > El nombre es obligatorio </p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="inputs-container">
                            <p>Correo</p>
                            <div className="input-box">
                                <input type="text" {...register("email", { required: true })} placeholder="usuario@example.com" />
                                <FaEnvelope className="icon" />
                                {
                                    errors.email && (
                                        <p style={{ color: 'red' }} > El correo es obligatorio </p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="inputs-container">
                            <p>Contraseña</p>
                            <div className="input-box">
                                <input type="password" {...register("password", { required: true })} placeholder="Digite una contraseña" />
                                <FaLock className="icon" />
                                    {
                                        errors.password && (
                                            <p style={{ color: 'red' }} > La contraseña es obligatoria </p>
                                        )
                                    }
                            </div>
                        </div>
                        <button type="submit" id="register-btn">Registrar</button>

                        {
                            error.map((err, index) => (
                                <div key={index} style={{ padding: '5px' }}>
                                    <span style={{ color: 'red', padding: '10px' }}>{err}</span>
                                </div>
                            ))
                        }

                    </div>
                    <p style={{ textAlign: "center", width: "100%" }}>
                        Ya tienes una cuenta?{" "}
                        <Link to="/" className="forms-links"> Inicia sesion </Link>
                    </p>
                </form>
            </div>
            <div className="wrapper-basic wrapper-right">
                <AnimatedR />
            </div>
        </div>
    );
}
