import React from "react";
import '../assets/css/pages/newJobPage/newJobPage.css';
import NavBar from "../components/general/Navbar";



const NewJobPage = () => {
    return(
        <>
            <div className="newjob-card">
                <NewjobCard/>
            </div>
        </>
    )
}

const NewjobCard = () => {
    return(
        <>
            <NavBar />
            <div className="newjob-card-container">
                <h2>Add A New Job</h2>
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

export default NewJobPage;