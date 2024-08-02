import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInput = ({ name, value, onChange, onBlur }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="password-input-container">
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button
          type="button"
          className="password-toggle-btn"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash size="20px"/> : <FaEye size="20px"/>}
        </button>
      </div>
    );
  };


export default PasswordInput;