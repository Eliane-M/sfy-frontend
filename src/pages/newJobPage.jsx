import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/pages/newJobPage/newJobPage.css';
import NavBar from "../components/general/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config";



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
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
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
        const res = await axios.post(`${BASE_URL}/api/dashboard/new_job/`, {
            name,
            content,
            description,
            image,
        });
    
        if (res.status === 200) {
            navigate("/jobs", {
            state: { message: "Job added sucessfully." },
            });
        } else {
            setApiError("Failed to add job. Please try again.");
        }
        } catch (err) {
        setApiError(
            err.response?.data?.message ||
            "Failed to add job. Please try again."
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
                <h2>Add A New Job</h2>
                <div className="img-container">
                    {image ? <img src={image} alt="Course" /> : <div className="placeholder-img"></div>}
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange}/>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Job content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <textarea
                        placeholder="Job Description"
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

export default NewJobPage;