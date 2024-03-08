import { createContext, useState, useContext } from "react";
import { loginRequest, registerRequest } from '../api/auth.js'
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
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data)
        }

    }

    const registerUser = async (user) => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data)
        }
    }



    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated, error, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
};