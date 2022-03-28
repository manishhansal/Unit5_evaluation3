import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState("");
    const [username, setUsername] = React.useState("")
    const navigate = useNavigate(); //Here navigate is a function.

    const login = (token, username) => {
        setIsAuth(true);
        setToken(token);
        setUsername(username)
        navigate('/');
    };

    // const re

    const logout = () => {
        setIsAuth(false);
        navigate('/login')
    };

    return <AuthContext.Provider value={{ isAuth, token, username, login, logout }}>{children}</AuthContext.Provider>
}
