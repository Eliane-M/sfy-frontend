import React from "react";
import { SecondColumn } from "../secondColumn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState('');
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleBlur = (field) => {
    if (field === "email") {
      setEmailError(!email ? "Email is required" : "");
    } else if (field === "password") {
      setPasswordError(!password ? "Password is required" : "");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      if (!value) {
        setEmailError("Email is required");
      } else {
        setEmailError("");
      }
    } else if (name === "password") {
      setPassword(value);
      if (!value) {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setEmailError(email ? "" : "Email is required");
      setPasswordError(password ? "" : "Password is required");
      return;
    }
    setLoading(true);
    try{
      const res = await axios.post(`${BASE_URL}/api/auth/login/`, {
        username: email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const token = res.data.access;
      const role = res.data.role;
      const user = res.data.user;
      
      if(token && user && role){
        localStorage.setItem('token', token);
        localStorage.setItem('firstName', user.first_name);
        localStorage.setItem('lastName', user.last_name)
        localStorage.setItem('role', role)


        if(role === 'staff'){
          navigate('/adminpanel');
        } else{
          navigate("/");
        }
        
      } else {
        setGeneralError('Login failed. Please try again')
      }
      

      console.log('form submitted with data', res.data);

    } catch(err){
      if(err.response){
        console.error('Server responded with an error: ', err.response)
        setGeneralError('Invalid credentials')
      } else if(err.rquest){
        console.log('No response received: ', err.request);
        setGeneralError('Server is not responding. Please try again later');
      } else{
        console.error('Error sending the request: ', err.message);
        setGeneralError('An error occured. Please try again')
      }
    } finally{
      setLoading(false);
    }

    
  };
  return (
    <>
      <div className="login-grid-container">
        <div className="first-grid-container">
          <div className="first-grid-column">
            <div className="title-container">
              <div className="title">
                <h2>Welcome Back</h2>
              </div>
              <div className="description">
                <p>Log into your account</p>
              </div>
            </div>

            <form className="login-form">
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
              />
              {emailError && <div className="error-message">{emailError}</div>}
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
                onBlur={() => handleBlur('password')}
              />
              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
              <div className="forgot-password">
                <a href="" onClick={() => navigate("/forgotpassword")} style={{textDecoration: 'none'}}>
                  Forgot Password?
                </a>
              </div>
            </form>
            {generalError && <div className="error-message">{generalError}</div>}
            <div className="login-btn">
              <a href="" onClick={handleLogin} disabled={loading} className={loading ? "btn-disabled" : ""} >
                Log In
              </a>
            </div>

            <div className="signup-btn">
              <a href="" onClick={() => navigate("/signup")}>
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <div className="second-grid-column-container">
          <SecondColumn />
        </div>
      </div>
    </>
  );
};
