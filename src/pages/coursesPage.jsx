import React, { useEffect, useState } from "react";
import NavBar from "../components/general/Navbar";
import '../assets/css/pages/coursesPage/courses.css'
import { FaClock, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <div className="course-card" style={{ cursor: 'pointer' }} onClick={() => navigate(`/courses/${course.id}`)}>
            <div className="img-container">
                <img src={course.image} alt={course.title} />
            </div>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <div className="hrs-level">
                <div className="hours">
                    <div>
                        <FaClock size={20} color="#1E7938" />
                    </div>
                    <div className="time">
                        <p>{course.duration} hours</p>
                    </div>
                </div>
                <div className="level">
                    <div>
                        <FaBook size={20} color="#1E7938" />
                    </div>
                    <div className="level-text">
                        <p>{course.level}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/dashboard/educational_resources/`);
                setCourses(response.data.educational_resources);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <>
            <NavBar />
            <div className="courses-container">
                <h1>Courses</h1>
                <div className="courses-cards">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course.name} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Courses;