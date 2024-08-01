import React from "react";
import { SecondColumn } from "../secondColumn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ResetPassword = () => {
    const navigate = useNavigate();
    const [text, setDigits] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        console.log('OTP: ', text);
        navigate('/login')
    }
    return(
        <>
         <div className="reset-password-grid-container">
            <div className="first-grid-container">
            <div className="first-grid-column">
                <div className="title-container">
                <div className="title">
                    <h2>Reset Password</h2>
                </div>
                <div className="description">
                    <p>We have just sent a code to your email</p>
                </div>
                </div>
                
                <form className="reset-password-form">
                    <input type="text" placeholder="Enter Code" value={text} onChange={(e) => setDigits(e.target.value)}/>
                    <input type="text" placeholder="Enter New Password" value={text} onChange={(e) => setDigits(e.target.value)}/>
                    <input type="text" placeholder="Confirm New Password" value={text} onChange={(e) => setDigits(e.target.value)}/>
                    
                </form>
                <div className="login-btn">
                    <a href="" onClick={handleReset}>Continue</a>
                </div>

                <div className="signup-btn">
                    <a href="">Log In</a>
                </div>


                
            </div>
            </div>
            
            <div className="second-grid-column-container">
                <SecondColumn/>
                
            </div>
         </div>
        </>
    )
}