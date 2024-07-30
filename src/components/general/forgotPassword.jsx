import React from "react";
import { SecondColumn } from "../secondColumn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setError('');
        try{
            const res = await axios.post(`${BASE_URL}/api/auth/reset/`, {email});

            navigate('/resetpassword');

        }catch(err){
            if (err.response && err.response.status === 404){
                setError('User with that email does not exist. Please check the email and try again.');
            } else {
                setError('Failed to send password reset email. Please try again.');
            }
            
            console.error(err);
        } finally{
            setLoading(false);
        }
        
        
        
    }
    return(
        
        <>
         <div className="forgot-password-grid-container">
            <div className="first-grid-container">
            <div className="first-grid-column">
                <div className="title-container">
                <div className="title">
                    <h2>Forgot Password</h2>
                </div>
                <div className="description">
                    <p>Enter your email address</p>
                </div>
                </div>
                
                <form className="forgot-password-form" >
                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    
                </form>
                <div className="login-btn" >
                    <a href="" onClick={handleForgotPassword} aria-disabled={loading} className={loading ? "btn-disabled" : ""}>Continue</a>
                </div>

                <div className="signup-btn">
                    <a href="" onClick={() => navigate('/login')}>Log In</a>
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