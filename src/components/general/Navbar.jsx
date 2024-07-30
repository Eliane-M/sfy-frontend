import React, {useState} from "react";
import '../../assets/css/pages/homePage/home.css';
import logo from '../../images/Logo.png';
import account from '../../images/account.png';
import dropdown from '../../images/dropdown.png';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = () => {

    const isLoggedIn = () => {
        return localStorage.getItem('token')
    }
    const [showDropdown, setShowDropdown] = useState(false)
    
    const handleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <p>Agriculture For Youth</p>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><a href="#">Job Listing</a></li>
                {!isLoggedIn() ? (
                    <>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </>
                ) : null}
            </ul>
            {isLoggedIn() && (
                <div className="account">
                    <img src={account} alt="Account" />
                    <div className="dropdown">
                        <button className="dropdown-button" onClick={handleDropdown}>
                            <FaAngleDown size={20} />
                        </button>
                        {showDropdown && (
                            <div className="dropdown-content" style={{ background: '#fff' }}>
                                <button onClick={handleLogout}>Log Out</button>
                                <Link to="/switch-account">Switch Account</Link>
                                <Link to="/account">View Profile</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;