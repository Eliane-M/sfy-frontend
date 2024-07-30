import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Login } from "../components/general/login";
import '../assets/css/pages/loginPage/login.css';

const LoginPage = () => {

    return (
        <>
            <div className="login-container">
            <Login/>
            </div>
            
        </>
    )
}

export default LoginPage;