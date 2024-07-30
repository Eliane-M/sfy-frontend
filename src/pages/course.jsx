import React from "react";
import NavBar from "../components/general/Navbar";
import '../assets/css/pages/coursesPage/courses.css';
import check from '../images/check.svg'
import beginner from '../images/beginner.svg'
import community from '../images/community.svg'
import exercises from '../images/exercises.svg'
import lessons from '../images/lessons.svg'
import { FaArrowRight } from "react-icons/fa";
import { FaA } from "react-icons/fa6";
const CoursePage = () => {
    return(
        <>
        <NavBar/>
        <div className="course-details-container">
            <div className="names">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <div className="title">
                <h3>COURSE</h3>
                <h4>Name of course</h4>
                </div>
                
            </div>

            <div className="description">
                <div className="first-row">
                    <h4>About the course</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                        vel purus auctor, consectetur neque vitae, bibendum nisi. Sed vel purus 
                        auctor, consectetur neque vitae, bibendum nisi. Sed vel purus auctor, consectetur neque vitae, bibendum nisi.</p>

                    <div className="skills-facts-container">
                    <div className="facts">

                        <div className="facts-item">
                            <img src={beginner} alt="" />
                            <p>Beginner friendly</p>
                        </div>
                        <div className="facts-item">
                        <img src={community} alt="" />
                            <p>120 people enrolled</p>
                        </div>
                        <div className="facts-item">
                        <img src={lessons} alt="" />
                            <p>0/120 Lessons</p>
                        </div>
                        <div className="facts-item">
                        <img src={exercises} alt="" />
                            <p>0/100 Exercises</p>
                        </div>
                    </div>
                        <div className="skills">
                            <p>Hard and soft skills</p>
                            <p>Communication skills</p>
                            <p>Language</p>
                            <p>Teamwork</p>
                        </div>
                        
                    </div>
                </div>

                <div className="second-row">
                    <h4>Progress</h4>
                    <div className="progress-bar">
    <div className="progress-bar-inner" style={{ width: '0%' }}></div>
</div>
                    <div className="button">
                    <a href="">Start Learning <FaArrowRight/></a>
                    </div>
                        
                    
                    <div className="list">
                        <div className="list-item">
                            <img src={check} alt="" />
                            <p>Introduction</p>
                        </div>
                        <div className="list-item">
                            <img src={check} alt="" />
                            <p>Basic farming techniques</p>
                            </div>
                            <div className="list-item">
                            <img src={check} alt="" />
                            <p>Crop rotation and diversification</p>
    </div>
                            <div className="list-item">
                                <img src={check} alt="" />
                                <p>Irrigation and drainage</p>
                            </div>

                            <div className="list-item">
                                <img src={check} alt="" />
                                <p>Farm Management</p>
                            </div>

                            <div className="list-item">
                                <img src={check} alt="" />
                                <p>Market analysis and negotiation</p>
                            </div>
    
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )

}

export default CoursePage;