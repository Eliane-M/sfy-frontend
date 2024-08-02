import React from "react";
import { useState } from "react";
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
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <>
            <NavBar />
            <div className="newjob-card-container">
                <h2>Add A New Job</h2>
                <div className="img-container">
                    {image ? <img src={image} alt="Course" /> : <div className="placeholder-img"></div>}
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange}/>
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