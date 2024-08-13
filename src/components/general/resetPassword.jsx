import React from "react";
import { SecondColumn } from "../secondColumn";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import PasswordInput from "./passwordInput";

export const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, OTP } = location.state || {};

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validatePassword = (password) => {
        const rules = [
        {
            test: password.length >= 8,
            message: "Password must be at least 8 characters long",
        },
        {
            test: /[A-Z]/.test(password),
            message: "Password must contain at least one capital letter",
        },
        {
            test: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            message: "Password must contain at least one special character",
        },
        {
            test: /[0-9]/.test(password),
            message: "Password must contain at least one number",
        },
        ];

        for (let rule of rules) {
        if (!rule.test) return rule.message;
        }

        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.newPassword) {
        newErrors.newPassword = "Please fill in the new password field";
        isValid = false;
        } else {
        const passwordError = validatePassword(formData.newPassword);
        if (passwordError) {
            newErrors.newPassword = passwordError;
            isValid = false;
        }
        }

        if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please fill in the confirm password field";
        isValid = false;
        } else if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setApiError("");

        if (!validateForm()) {
        return;
        }

        setLoading(true);

        try {
        const res = await axios.post(`${BASE_URL}/api/auth/reset_confirm/`, {
            code: OTP,
            email,
            new_password: formData.newPassword,
        });

        if (res.status === 200) {
            navigate("/login", {
            state: { message: "Password reset successful. Please log in." },
            });
        } else {
            setApiError("Failed to reset password. Please try again.");
        }
        } catch (err) {
        setApiError(
            err.response?.data?.message ||
            "Failed to reset password. Please try again."
        );
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

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
                    <input type="text" className="" placeholder="Enter your OTP" />
                    {["newPassword", "confirmPassword"].map((field) => (
                    <div key={field}>
                        <PasswordInput
                        type="password"
                        name={field}
                        placeholder={
                            field === "newPassword"
                            ? "New Password"
                            : "Confirm Password"
                        }
                        value={formData[field]}
                        onChange={handleChange}
                        />
                        {isSubmitted && errors[field] && (
                        <div className="error-message">{errors[field]}</div>
                        )}
                    </div>
                    ))}
                    {isSubmitted && apiError && (
                    <div className="error-message">{apiError}</div>
                    )}
                </form>
                <div className="login-btn">
                    <a href="/login" onClick={handleSubmit}>Submit</a>
                </div>

                <div className="signup-btn">
                    <a href="/login">Log In</a>
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