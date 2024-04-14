import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditProfile.css";

function EditProfile() {
  const [formState, setFormState] = useState({
    fname: "",
    gender: "",
    usertype: "",
    username: " ",
    email: "",
    currdegree: "",
    currcourse: "",
    passyear: "",
    skillss: "",
    skillsDescp: "",
    projectLink: "",
    linkedIn: "",
    github: "",
    insta: "",
  });

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile) {
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail && storedProfile[userEmail]) {
        setFormState(storedProfile[userEmail]);
      }
    } else {
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        setFormState((prevState) => ({
          ...prevState,
          email: userEmail,
        }));
      }
    }
  }, []);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   // Update the form state
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });

  //   // Update the local storage data
  //   const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
  //   const userEmail = formState.email;
  //   const existingProfile = userProfile[userEmail];

  //   if (existingProfile) {
  //     // If the user already has a profile, update the corresponding field in local storage
  //     userProfile[userEmail] = {
  //       ...existingProfile,
  //       [name]: value,
  //     };
  //     localStorage.setItem("userProfile", JSON.stringify(userProfile));
  //   }
  // };

  const handleSubmit = async () => {
    try {
      // Check if the user already has a profile
      const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
      const userEmail = formState.email;
      const existingProfile = userProfile[userEmail];

      if (existingProfile) {
        // If the user already has a profile, make a PUT request to update it
        await axios.put(
          `http://localhost:4200/api/contacts/${existingProfile._id}`,
          formState,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // Update the profile in localStorage
        userProfile[userEmail] = formState;
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        window.alert("Profile updated successfully");
      } else {
        // If the user doesn't have a profile, make a POST request to create one
        await axios.post("http://localhost:4200/api/contacts/", formState, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Save the new profile in localStorage
        userProfile[userEmail] = formState;
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        window.alert("Profile created successfully");
      }
    } catch (error) {
      window.alert("Error saving your profile!");
      console.error("Error saving profile:", error);
    }
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
                id="fname"
                name="fname"
                value={formState.fname}
                onChange={handleInputChange}
                required
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
                required
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
                id="usertype"
                name="usertype"
                value={formState.usertype}
                onChange={handleInputChange}
                required
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formState.username}
                onChange={handleInputChange}
                required
              />
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
                required
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
              {/* <input
                type="text"
                className="form-control"
                id="course"
                name="course"
                value={formState.course}
                onChange={handleInputChange}
              /> */}
              <select
                className="form-control"
                id="currdegree"
                name="currdegree"
                value={formState.currdegree}
                onChange={handleInputChange}
                required
              >
                <option className="option-field" value="">
                  Select Current Degree
                </option>
                <option className="option-field" value="Bachelor">
                  Bachelor
                </option>
                <option className="option-field" value="Master">
                  Master
                </option>
                <option className="option-field" value="PhD">
                  PhD
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization:</label>
              {/* <input
                type="text"
                className="form-control"
                id="specialization"
                name="specialization"
                value={formState.specialization}
                onChange={handleInputChange}
              /> */}
              <select
                className="form-control"
                id="currcourse"
                name="currcourse"
                value={formState.currcourse}
                onChange={handleInputChange}
                required
              >
                <option className="option-field" value="">
                  Select Course Specialization
                </option>
                <option className="option-field" value="Cs">
                  Computer Engineering
                </option>
                <option className="option-field" value="It">
                  Information Technology
                </option>
                <option className="option-field" value="Mech">
                  Mechanical Engineering
                </option>
                <option className="option-field" value="Extc">
                  EXTC Engineering
                </option>
                <option className="option-field" value="Mech">
                  Mechanical Engineering
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="passingYear">Passing Year:</label>
              <input
                type="text"
                className="form-control"
                id="passyear"
                name="passyear"
                value={formState.passyear}
                onChange={handleInputChange}
                required
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
                id="skillss"
                name="skillss"
                value={formState.skillss}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="interests">Interests:</label>
              <input
                type="text"
                className="form-control"
                id="skillsDescp"
                name="skillsDescp"
                value={formState.skillsDescp}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectLinks">Project Links:</label>
              <input
                type="text"
                className="form-control"
                id="projectLink"
                name="projectLink"
                value={formState.projectLink}
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
                id="insta"
                name="insta"
                value={formState.insta}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedinLink">LinkedIn Link:</label>
              <input
                type="text"
                className="form-control"
                id="linkedIn"
                name="linkedIn"
                value={formState.linkedIn}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="githubLink">GitHub Link:</label>
              <input
                type="text"
                className="form-control"
                id="github"
                name="github"
                value={formState.github}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="buttonForm">
          {/* <input type="button" value="Save" className="formButton" /> */}
          <button onClick={handleSubmit} className="formButton">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
