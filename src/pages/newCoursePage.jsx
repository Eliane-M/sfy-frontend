import React from "react";
import NavBar from "../components/general/Navbar";


const NewCoursePage = () => {
    return(
        <>
            <div className="newjob-card">
                <NewCourseCard/>
            </div>
        </>
    )
}

const NewCourseCard = () => {
    return(
        <>
            <NavBar />
            <div className="newjob-card-container">
                <h2>Add A New Course</h2>
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <form>
                    <input type="text" placeholder="Job Title"/>
                    <input type="text" placeholder="Company Name"/>
                    <input type="text" placeholder="Location"/>
                    <textarea placeholder="Job Description"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default NewCoursePage;