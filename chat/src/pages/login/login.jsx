import React from 'react';
import "./login.css";

export default function Login() {

    return (
        <>
            <div className="login-container">
                <h2>Iniciar sesión</h2>

                <form action="#">
                    <div className="input-group">
                        <label htmlFor="username">Usuario:</label>
                        <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>

        </>
    )
}