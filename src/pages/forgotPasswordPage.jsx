import React from "react";
import { ForgotPassword } from "../components/general/forgotPassword";
import '../assets/css/pages/loginPage/login.scss'

export const ForgotPasswordPage = () => {
    return(
        <>
            <div className="forgot-password-container">
                <ForgotPassword/>
            </div>
        </>
    )
}