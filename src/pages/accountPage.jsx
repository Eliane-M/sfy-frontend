import React from "react";
import NavBar from "../components/general/Navbar";
import '../assets/css/pages/accountsPage/accounts.css'
import account from '../images/account.png'

const Account = () => {
    return(
        <>
        <NavBar/>
        <div className="account-container">
        <div className="first-grid">
            <h3>Profile picture</h3>
            <div className="img-container">
                <img src={account} alt="profile" />
            </div>
        </div>

        <div className="second-grid">
            <h3>Personal Information</h3>
            <div className="details">
                <p>Name: John Doe</p>
                <p>Email: john.doe@example.com</p>
                <p>Phone: 1234567890</p>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Account;