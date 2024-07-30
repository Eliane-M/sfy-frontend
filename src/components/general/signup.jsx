import React from "react";
import { SecondColumn } from "../secondColumn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";

export const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(String(phoneNumber));
  };

  const handleBlur = (field) => {
    const newErrors = { ...errors };
    switch (field) {
      case "fullName":
        if (!fullName) {
          newErrors.fullName = "Full Name is required";
        } else {
          const nameParts = fullName.trim().split(" ");
          if(nameParts.length < 2){
            newErrors.fullName = "Full Name is required"
          }
          else {
            delete newErrors.fullName;
          }
        }
         
        break;
      case "email":
        if (!email) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
          newErrors.email = "Invalid email";
        } else {
          delete newErrors.email;
        }
        break;
      case "phoneNumber":
        if (!phoneNumber) {
          newErrors.phoneNumber = "Phone Number is required";
        } else if (!validatePhoneNumber(phoneNumber)) {
          newErrors.phoneNumber = "Invalid phone number";
        } else {
          delete newErrors.phoneNumber;
        }
        break;
      case "password":
        if (!password) {
          newErrors.password = "Password is required";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/api/auth/register/`,
        {
          full_name: fullName,
          email,
          phoneNumber,
          password,
        }
      );
      console.log(res)
      
      navigate("/login");

    } catch (err) {
      if (err.response && err.response.status === 409) {
        setErrors({
          email: "Email already exists. Please use a different email.",
        });
      } else {
        setErrors({ submit: "Signup failed. Please try again" });
      }
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <div className="signup-grid-container">
        <div className="first-grid-container">
          <div className="first-grid-column">
            <div className="title-container">
              <div className="title">
                <h2>Create An Account</h2>
              </div>
              <div className="description">
                <p>Fill In Your Details</p>
              </div>
            </div>

            <form className="signup-form">
              <input
                name="fullname"
                type="text"
                placeholder="Enter Your Full Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setErrors({ ...errors, fullName: "" });
                }}
                onBlur={() => handleBlur("fullName")}
              />
              {errors.fullName && (
                <div className="error-message">{errors.fullName}</div>
              )}
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
              <input
                name="phonenumber"
                type="tel"
                placeholder="Enter Your Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setErrors({ ...errors, phoneNumber: "" });
                }}
                onBlur={() => handleBlur("phoneNumber")}
              />
              {errors.phoneNumber && (
                <div className="error-message">{errors.phoneNumber}</div>
              )}
              <input
                name="password"
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
                onBlur={() => handleBlur("password")}
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </form>
            <div className="login-btn">
              <a href="" onClick={handleSignup} disabled={loading} className={loading ? 'btn-disabled' : ''}>
                Sign Up
              </a>
            </div>
            <div className="signup-btn">
              <a href="" onClick={() => navigate("/login")}>
                Log In
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
