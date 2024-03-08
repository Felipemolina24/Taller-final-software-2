import React, { useEffect } from 'react';
import "./register.css";
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import AnimatedR from "./animationR/animatedR";

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: registerUser, isAuthenticated, error } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    });

    const onSubmit = handleSubmit(async (values) => {
        try {
            await registerUser(values);
            navigate("/dashboard"); // Redirige al usuario a la página de inicio después del registro
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    });

    return (
        <div className="wrapper">
            <div className="wrapper-basic wrapper-left">
                <form onSubmit={onSubmit} className="form">
                    <h3 className="title-register">Regístrate</h3>
                    <div className="container-align">
                        <div className="inputs-container">
                            <p>Correo</p>
                            <div className="input-box">
                                <input type="text" {...register("email", { required: true })} placeholder="usuario@example.com" />
                                <FaUser className="icon" />
                            </div>
                        </div>
                        <div className="inputs-container">
                            <p>Contraseña</p>
                            <div className="input-box">
                                <input type="password" {...register("password", { required: true })} placeholder="Debe tener por lo menos 6 caracteres" />
                                <FaLock className="icon" />
                            </div>
                        </div>
                        <div className="inputs-container">
                            <p>Confirmar Contraseña</p>
                            <div className="input-box">
                                <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirma tu contraseña" />
                                <FaLock className="icon" />
                            </div>
                        </div>
                        <button type="submit" id="register-btn">Registrar</button>
                        {
                            error.map((err, index) => (
                                <div key={index}>
                                    <span style={{ color: 'red' }}>{err}</span>
                                </div>
                            ))
                        }
                    </div>
                </form>
            </div>
            <div className="wrapper-basic wrapper-right">
                <AnimatedR />
            </div>
        </div>
    );
}
