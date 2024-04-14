

import React, { useState } from 'react';
import './EditProfile.css';

function App() {
  const [formState, setFormState] = useState({
    // fullName: '',
    gender: '',
    userType: '',
    email: '',
    phone: '',
    course: '',
    specialization: '',
    passingYear: '',
    skills: '',
    interests: '',
    projectLinks: '',
    instaLink: '',
    linkedinLink: '',
    githubLink: '',
  });

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
  
    <div className="editContainer">
      <div className="flexEditContainer">
      <div className="E-card">
        <div className="card-header">
          <h2>Personal Information</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formState.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              value={formState.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <select
              className="form-control"
              id="userType"
              name="userType"
              value={formState.userType}
              onChange={handleInputChange}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      

      <div className="E-card">
        <div className="card-header">
          <h2>Education</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input
              type="text"
              className="form-control"
              id="course"
              name="course"
              value={formState.course}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              className="form-control"
              id="specialization"
              name="specialization"
              value={formState.specialization}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passingYear">Passing Year:</label>
            <input
              type="text"
              className="form-control"
              id="passingYear"
              name="passingYear"
              value={formState.passingYear}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      </div>
      <div className="flexEditContainer">
      <div className="E-card">
        <div className="card-header">
          <h2>Skills and Project</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              value={formState.skills}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Interests:</label>
            <input
              type="text"
              className="form-control"
              id="interests"
              name="interests"
              value={formState.interests}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectLinks">Project Links:</label>
            <input
              type="text"
              className="form-control"
              id="projectLinks"
              name="projectLinks"
              value={formState.projectLinks}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="E-card">
        <div className="card-header">
          <h2>Social Links</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="instaLink">Instagram Link:</label>
            <input
              type="text"
              className="form-control"
              id="instaLink"
              name="instaLink"
              value={formState.instaLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedinLink">LinkedIn Link:</label>
            <input
              type="text"
              className="form-control"
              id="linkedinLink"
              name="linkedinLink"
              value={formState.linkedinLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="githubLink">GitHub Link:</label>
            <input
              type="text"
              className="form-control"
              id="githubLink"
              name="githubLink"
              value={formState.githubLink}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="buttonForm">
        <input type="button" value="Save" className='formButton'/>
      </div>
      </div>
    </div>
  );
}

export default App;
