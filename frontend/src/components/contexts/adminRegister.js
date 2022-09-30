import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const registerAdminContext = createContext();

const RegisterAdminProvider = (props) => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('6331e15b77850e5ab71f0d4d');
    const [message, setMessage] = useState('');

    const history = useNavigate();


    const addAdmin = async () => {
        try {
            await axios.post('http://localhost:5000/user/register', 
            {
                firstName,
                lastName,
                country,
                city,
                email,
                password,
                confirmPassword,
                role
            })
            .then((result)=>{
                setMessage('Create Account');
                history('/login/admin/controller/page');
            })
            .catch((err)=>{
                if (!firstName) {
                    setMessage('Enter Your First Name');
                } else if (!lastName) {
                    setMessage('Enter Last Name');
                } else if (!country) {
                    setMessage('Enter Your Country');
                } else if (!city) {
                    setMessage('Enter Your City');
                } else if (!password) {
                    setMessage('Enter Your Password');
                } else if (!confirmPassword) {
                    setMessage('Enter Your RE-Password');
                } else if (password !== confirmPassword) {
                    setMessage('Password does not valid');
                } else {
                    setMessage('Email already exist');
                }
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    const state = {
        firstName,
        setfirstName,
        lastName,
        setlastName,
        country,
        setCountry,
        city,
        setCity,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        role,
        setRole,
        message,
        setMessage,
        addAdmin
    };

    return (
        <registerAdminContext.Provider value={state}>
            {props.children}
        </registerAdminContext.Provider>
    );
};

export default RegisterAdminProvider;