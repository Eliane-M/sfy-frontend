import React, {useState} from 'react';
import NavBar from '../components/general/Navbar';
import '../assets/css/pages/coursesPage/courses.css';
import '../assets/css/pages/jobsPage/jobs.css';
import { FaHouse, FaBookOpen, FaPenToSquare, FaMoneyBill } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import BASE_URL from '../config';
import axios from 'axios';


const JobsPage = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/dashboard/joblisting/`);
        setJobs(response.data.job_listing);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

    const isEmployer = () =>{
        return localStorage.getItem('role') === 'staff';
    }
    return(
        <>
            <NavBar/>
            <div className="courses-container">
                <div className="job-heading">
                    <h1>Jobs Available</h1>
                    {isEmployer() && <Link to="/jobs/new-job" className="new-job-button">Add New Job</Link>}
                </div>
                <div className="courses-cards">
          {jobs && jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
            </div>
        </>
    )

}

const JobCard = ({ job }) => {
    const navigate = useNavigate();
    return (
      <div className="course-card" style={{ cursor: 'pointer' }}>
        <div className="img-container">
          <img src={job.image} alt={job.title}  style={{maxWidth: '100%', height: 'auto', borderRadius: '12px'}}/>
        </div>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <div className="hrs-level">
          <div className="hours">
            <div>
              <FaHouse color="#1E7938" />
            </div>
            <div className="time">
              <p>{job.location}</p>
            </div>
          </div>
          <div className="level">
            <div>
              <FaMoneyBill color="#1E7938" />
            </div>
            <div className="level-text">
              <p>{job.salary} RWF</p>
            </div>
          </div>
        </div>
        <div className="apply" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginBottom: '5rem' }}>
          <div>
            <FaPenToSquare color="#1E7938" />
          </div>
          <div className="apply-text">
            <p>Apply to this position</p>
          </div>
        </div>
      </div>
    );
  };

const JobPageInstructor = () => {
    return(
        <>
            <NavBar/>
            <div className="courses-container">
                <div className="job-heading">
                    <h1>Your Jobs</h1>
                    <Link to="new_job" className="new-job-button">Add New Job</Link>
                </div>
                <div className="courses-cards">
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
            </div>
        </>
    )
}

const NewJobPage = () => {
    return(
        <>
            <NavBar/>
            <div className="new-job-container">
                <h1>Add New Job</h1>
                <div className="new-job-form">
                    <form>
                        <label htmlFor="job-title">Job Title:</label>
                        <input type="text" id="job-title" name="job-title" placeholder="Job Name" required />

                        <label htmlFor="job-description">Job Description:</label>
                        <textarea id="job-description" name="job-description" placeholder="Job Description" required></textarea>

                        <label htmlFor="company-name">Company Name:</label>
                        <input type="text" id="company-name" name="company-name" placeholder="Company Name" required />

                        <label htmlFor="requirements">Requirements:</label>
                        <textarea id="requirements" name="requirements" placeholder="Requirements" required></textarea>

                        <button type="submit">Save new job</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default JobsPage;