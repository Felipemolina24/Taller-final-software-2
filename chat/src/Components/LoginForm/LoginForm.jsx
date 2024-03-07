import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Inicio de Sesión</h1>
            <div className='input-box'>
                <input type='text' placeholder='Usuario' required/>
                <FaUser className='icon'/>


            </div>
            <div className='input-box'>
                <input type='password' placeholder='Contraseña'required/>
                <FaLock className='icon'/>

            </div>
            <div className='remember-forgot'>
                <label><input type='checbox'/>Recordar</label>
                <a href='#'>Olvidaste tu contraseña?</a>

            </div>

            <button type='submit'>Iniciar sesión</button>

            <div className='register-link'>
                <p>No estas registrado? <a href='#'>Registrar</a></p>
            </div>
     </form>
 </div>
  )
}

export default LoginForm