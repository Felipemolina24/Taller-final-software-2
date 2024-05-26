import { createContext, useState, useContext } from "react";
import { loginRequest, registerRequest, getUser } from '../api/auth.js'
//funcion para crear el contexto
export const AuthContext = createContext();

//funcion para imporat useAuth en lugar de tener que importar AuthContext y usar useContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

//componente para englobar otros componentes
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState([]);

    const login = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data)
        }

    }

    const registerUser = async (user) => {
        try {
            console.log(user);
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data)
        }
    }

    const getUser = async (email) => {
        try {
            const res = await getUser(email)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated, getUser, error, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
};