//Skills.jsx

import React, { useState } from "react";
import "./Skills.css";
import { Link , useNavigate} from "react-router-dom";

function EditSkills({ updateFormData }) {
  navigate = useNavigate()
  const [formData, setFormData] = useState({
    skills: "",
    describeInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   // handleSubmit();
  //   updateFormData(formData);
  //   console.log(formData);
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    updateFormData(formData);
    navigate('/project')
    console.log(formData);
  };

 

  return (
    <div className="container body">
      <div className="content">
        <div className="edit-section">
          <h1 className="section-title">Edit Profile</h1>
          <div className="edit-links">
            <Link to="/Editprofile">
              {" "}
              <div className="edit-link">Basic Details</div>{" "}
            </Link>
            <Link to="/education">
              {" "}
              <div className="edit-link">Education</div>
            </Link>
            <Link to="/skills">
              {" "}
              <div className="edit-link">Skills</div>
            </Link>
            <Link to="/project">
              {" "}
              <div className="edit-link">Project</div>
            </Link>
            <Link to="/contactInfo">
              {" "}
              <div className="edit-link">Contact Information</div>
            </Link>
          </div>
        </div>
        <div className="form-section">
          <h1 className="section-title">Skills</h1>
          <form onSubmit={handleFormSubmit} className="user-details">
            <div className="input-box">
              <label htmlFor="skills" className="form-label">
                Skills
              </label>
              <input
                type="text"
                className="form-input"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Enter Your Skills"
              />
            </div>
            <div className="input-box">
              <label htmlFor="describeInterest" className="form-label">
                Describe Interests{" "}
              </label>
              <textarea
                className="form-input"
                row="4"
                col="10"
                id="describeInterest"
                name="describeInterest"
                value={formData.describeInterest}
                onChange={handleChange}
                placeholder="Describe your interests in the above mentioned skills.."
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditSkills;
