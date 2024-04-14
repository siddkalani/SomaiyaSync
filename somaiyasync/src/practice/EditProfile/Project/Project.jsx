//Project.jsx

import React, { useState } from "react";
import "./Project.css";
import { Link, useNavigate } from "react-router-dom";

function EditProject({ updateFormData }) {
  navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    projectLink: "",
    technologiesUsed: "",
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
    navigate("/contactInfo");
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
          <h1 className="section-title">Project Details</h1>
          <form onSubmit={handleFormSubmit} className="user-details">
            <div className="input-box">
              <label htmlFor="projectTitle" className="form-label">
                Project Title
              </label>
              <input
                type="text"
                className="form-input"
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                placeholder="Enter Project Title"
                // required
              />
            </div>
            <div className="input-box">
              <label
                htmlFor="projectDescription"
                className="form-label"
                id="proj-des-label"
              >
                Project Description
              </label>
              <textarea
                className="form-input"
                row="4"
                col="3"
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Enter Project Description"
                // required
              />
            </div>
            <div className="input-box">
              <label htmlFor="projectLink" className="form-label">
                Upload Link of Project
              </label>
              <input
                type="text"
                className="form-input"
                id="projectLink"
                name="projectLink"
                value={formData.projectLink}
                onChange={handleChange}
                placeholder="Enter Upload Link"
              />
            </div>
            <div className="input-box">
              <label htmlFor="technologiesUsed" className="form-label">
                Technologies Used
              </label>
              <input
                type="text"
                className="form-input"
                id="technologiesUsed"
                name="technologiesUsed"
                value={formData.technologiesUsed}
                onChange={handleChange}
                placeholder="Enter Technologies Used"
                // required
              />
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

export default EditProject;
