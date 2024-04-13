//BasicDetails.jsx

import React, { useState } from "react";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";

function EditBasicDetails({ updateFormData }) {
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [userType, setUserType] = useState("Student");

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    dob: "",
    enrolId: "",
    gender: "",
    userType: "",
    email: "",
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
  //   // handleSubmit();
  //   updateFormData(formData);
  //   // Handle form submission here
  //   console.log(formData);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    updateFormData(formData);
    navigate("/education");
    console.log(formData);
  };

  return (
    <div className="container body">
      <div className="content">
        {/* <div className="edit-section">
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
        </div> */}
        <div className="form-section">
          <div>
          <h1 className="section-title">Edit Profile</h1>
          <form onSubmit={handleFormSubmit} className="user-details">
            <div className="input-box">

              <h2>Basic detials</h2>

              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-input"
                id="fulltName"
                name="fullName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="gender" className="form-label">
                gender
              </label>
              <input
                type="text"
                className="form-input"
                id="gender"
                name="lastName"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter Your gender"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="userId" className="form-label">
                user Id
              </label>
              <input
                type="text"
                className="form-input"
                id="userId"
                name="userId"
                value={formData.enrolId}
                onChange={handleChange}
                placeholder="Enter Your user Id"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="date"
                className="form-input"
                id="email"
                name="email"
                value={formData.dob}
                onChange={handleChange}
                // required
              />
            </div>
            <h2>education</h2>
            <div className="input-box">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="course"
                
                onChange={handleChange}
                required
              >
                <option className="option-field" value="">
                  Select Gender
                </option>
                <option className="option-field" value="male">
                  Male
                </option>
                <option className="option-field" value="female">
                  Female
                </option>
                <option className="option-field" value="other">
                  Other
                </option>
              </select>
            </div>
            <div className="input-box">
              <label className="form-label">User Type</label>
              <select
                className="form-select"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
              >
                <option className="option-field" value="">
                  Select User Type
                </option>
                <option className="option-field" value="student">
                  Student
                </option>
                <option className="option-field" value="teacher">
                  Teacher
                </option>
                <option className="option-field" value="recruiter">
                  Recruiter
                </option>
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-input"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter Your Username"
                // required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id"
                required
              />
            </div>
            {/* <div className="input-box">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-input" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' required />
                        </div>
                        <div className="input-box">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-input" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
                        </div> */}

            <button type="submit" className="btn">
              Next
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EditBasicDetails;
