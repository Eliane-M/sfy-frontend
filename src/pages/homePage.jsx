import React from "react";
import NavBar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import herosection from '../../src/images/herosection.png';
import Farming from '../../src/images/Farming.png';
import Livestock from '../../src/images/Livestock.png';
import Agro_tourism from '../../src/images/Agro_tourism.png';
import AFY from '../../src/images/AFY.png';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Card = ({title, image}) => {
    return(<>
    <div className="card" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="img-container">
        <img src={image} alt={title} />
        </div>
                        
                        <p>{title}</p>
                    </div>
    </>)
}

const Homepage = () => {
    return (
        <>
        <NavBar />
        <div className="homepage">
            <div className="hero-section">
                <div className="firstgrid">
                    <h1>Get employed and grow your future</h1>
                    <p>Welcome to Agriculture For Youth,
                        Your gateway to excting opportunitiesin the agriculture industry.</p>
                </div>
                <div className="secondgrid">
                    <img src={herosection} alt='' />
                </div>
            </div>

            <div className="services-container">
                <h3>Our Services</h3>
                
                <div className="cards">
                    <Card title='Farming' image={Farming}/>
                    <Card title='Livestock' image={Livestock} />
                    <Card title='Agro tourism' image={Agro_tourism}/>
                </div>

                <div className="button">
                    <div className="read-more">
                    <Link to='/services'>Read More</Link>
                    <FaAngleRight size={30}/>
                    </div>
                    
                    
                </div>
            </div>

            <div className="who-we-are">
                <h2>Our Mission</h2>
                <div className="who-we-are-div">
                    <p>At Agriculture For Youth, our mission is to support the growth and sustainability of the agricultural community by connecting skilled individuals with employers who value their expertise. 
                        We believe that a strong agricultural workforce is essential for a healthy, prosperous future. 
                        We are dedicated to bridging the gap between passionate job seekers and thriving businesses in the agricultural sector. Our platform specializes in three key areas: Livestock rearing, Farming, and Agro-Tourism.</p>
                    <img src={AFY} alt='' />
                </div>
            </div>

            <div className="choose-us">
                <h2>Why Choose Us</h2>
                <div className="choose-div">
                    <div className="reason-1">
                        <h3>Tailored Job Listings</h3>
                        <p> We curate job listings that are specific to the agricultural sector, ensuring you find the roles that suit your expertise and career goals.</p>
                    </div>
                    <div className="reason-2">
                        <h3>Community Focused</h3>
                        <p>We are committed to fostering a community where both job seekers and employers can thrive. Our platform encourages the sharing of knowledge and experiences.</p>
                    </div>
                    <div className="reason-3">
                        <h3>Supportive Network</h3>
                        <p>Our team is dedicated to providing support throughout your job search journey. From resume tips to interview preparation, we are here to help you succeed.</p>
                    </div>
                </div>
            </div>


        </div>
        <Footer />
        </>
        
    )
}

export default Homepage;