import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Signup } from "../components/general/signup";
import '../assets/css/pages/loginPage/login.css';

const SignupPage = () => {
    return(
        <>
            <div className="signup-container">
                <Signup/>
            </div>
        </>
    )
}

export default SignupPage