import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/general/Navbar";
import BASE_URL from "../config";
import axios from "axios";


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
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    const validateForm = () => {
        return name !== "" && content !== "" && description !== "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setApiError("");
    
        if (!validateForm()) {
        return;
        }
    
        setLoading(true);
    
        try {
        const res = await axios.post(`${BASE_URL}/api/dashboard/new_resource/`, {
            name,
            content,
            hours,
            description,
            image,
        });
    
        if (res.status === 200) {
            navigate("/courses", {
            state: { message: "Course created sucessfully." },
            });
        } else {
            setApiError("Failed to create course. Please try again.");
        }
        } catch (err) {
        setApiError(
            err.response?.data?.message ||
            "Failed to create course. Please try again."
        );
        console.error(err);
        } finally {
        setLoading(false);
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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Course Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Course Hours"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Course Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <textarea
                        placeholder="Course Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {isSubmitted && !validateForm() && (
                        <p>Please fill in all the fields.</p>
                    )}
                    {apiError && <p>{apiError}</p>}
                </form>
            </div>
        </>
    )
}

export default NewCoursePage;