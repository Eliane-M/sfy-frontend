import React from "react";
import NavBar from "../components/general/Navbar";
import '../assets/css/pages/coursesPage/courses.css'
import { FaClock, FaBook } from "react-icons/fa";

const CourseCard = () => {
    return(
        <div className="course-card">
            <div className="img-container">
                <img src="" alt="" />
            </div>
            <h2>Course Name</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae expedita ipsam incidunt sit reprehenderit, itaque quasi odit! Iure dolore reprehenderit quas alias nostrum sint quaerat amet id est accusantium?</p>
            <div className="hrs-level">
                <div className="hours">
                    <div>
                    <FaClock size={20} color="#1E7938"/>
                    </div>
                    <div className="time">

                    <p>15 hours</p>
                    </div>
                    
 
                </div>
                <div className="level">
                    <div>
                    <FaBook size={20} color="#1E7938"/>
                    </div>
                    
                    <div className="level-text">
                    <p>Intermediate</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}

const Courses = () => {
    return(
        <>
            <NavBar/>
            <div className="courses-container">
                <h1>Courses</h1>
                <div className="courses-cards">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>


            </div>
        </>
    )
}

export default Courses;