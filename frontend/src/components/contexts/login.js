import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const loginContext = createContext();

const LoginProvider = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [message, setMeesage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const history = useNavigate();

    useEffect(() => {
        saveToken(localStorage.getItem('token'));
    },[])

    const saveToken = (token) => {
        localStorage.setItem('token', token);
        if (token) {
            setToken(token)
        }
    }

    const login = async () => {
        try {
            const result = await axios.post('http://localhost:5000/user/login', {email,password});

            saveToken(result.data.token);

            history('/'); // main page

            setIsLoggedIn(true);

        } catch (err) {
            setMeesage(err.result.data);
        }
    }

    const state = {
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        message,
        setMeesage,
        isLoggedIn,
        setIsLoggedIn,
        login
    }

    return (
        <loginContext.Provider value={state}>
            {props.children}
        </loginContext.Provider>
    )
};

export default LoginProvider;