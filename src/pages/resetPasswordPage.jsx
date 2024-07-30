import React from "react";
import { ResetPassword } from "../components/general/resetPassword";
import '../assets/css/pages/loginPage/login.scss'

export const ResetPasswordPage = () => {
    return(
        <>
            <div className="reset-password-container">
                <ResetPassword/>
            </div>
        </>
    )
}