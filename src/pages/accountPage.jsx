import React from "react";
import NavBar from "../components/general/Navbar";
import '../assets/css/pages/accountsPage/accounts.css'
import account from '../images/account.png';
import { Link } from "react-router-dom";
import { useState } from "react";
// import { defaultAccount } from 

const Account = () => {
    const [image, setImage] = useState(account);
    const [preview, setPreview] = useState(account);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setImage(file);
        }
    };
    
    return(
        <>
        <NavBar/>
        <div className="account-container">
            {/* <div className="first-grid">
                <h3>Profile picture</h3>
                <div className="img-container">
                    <img src={account} alt="profile" />
                </div>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    style={{ display: 'none' }} 
                    id="fileInput" 
                />
                <label htmlFor="fileInput" className="change-picture-button">
                    Change Picture
                </label>
            </div> */}

            <div className="second-grid">
                <h3>Personal Information</h3>
                <div className="details">
                    <p>Name: {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</p>
                    <p>Email: {localStorage.getItem('email')}</p>
                    <Link to='/forgotPassword' className='reset-password-button'>Change Password</Link>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Account;