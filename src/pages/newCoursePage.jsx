import React from "react";
import { useState } from "react";
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
                <h2>Add A New Course</h2>
                <div className="img-container">
                    {image ? <img src={image} alt="Course" /> : <div className="placeholder-img"></div>}
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange}/>
                <form>
                    <input type="text" placeholder="Course Title"/>
                    <input type="text" placeholder="Course Duration"/>
                    <textarea placeholder="Course Description"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default NewCoursePage;