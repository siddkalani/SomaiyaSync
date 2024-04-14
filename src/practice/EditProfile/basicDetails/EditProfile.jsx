// //BasicDetails.jsx

// import React, { useState } from "react";
// import "./EditProfile.css";
// import { Link, useNavigate } from "react-router-dom";

// function EditBasicDetails({ updateFormData }) {
//   const navigate = useNavigate();
//   const [gender, setGender] = useState("male");

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const [userType, setUserType] = useState("Student");

//   const handleUserType = (event) => {
//     setUserType(event.target.value);
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     dob: "",
//     enrolId: "",
//     gender: "",
//     userType: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // handleSubmit();
//   //   updateFormData(formData);
//   //   // Handle form submission here
//   //   console.log(formData);
//   // };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     updateFormData(formData);
//     navigate("/education");
//     console.log(formData);
//   };

//   return (
//     <div className="container body">
//       <div className="content">
//         {/* <div className="edit-section">
//           <h1 className="section-title">Edit Profile</h1>
//           <div className="edit-links">
//             <Link to="/Editprofile">
//               {" "}
//               <div className="edit-link">Basic Details</div>{" "}
//             </Link>
//             <Link to="/education">
//               {" "}
//               <div className="edit-link">Education</div>
//             </Link>
//             <Link to="/skills">
//               {" "}
//               <div className="edit-link">Skills</div>
//             </Link>
//             <Link to="/project">
//               {" "}
//               <div className="edit-link">Project</div>
//             </Link>
//             <Link to="/contactInfo">
//               {" "}
//               <div className="edit-link">Contact Information</div>
//             </Link>
//           </div>
//         </div> */}
//         <div className="form-section">
//           <div>
//           <h1 className="section-title">Edit Profile</h1>
//           <form onSubmit={handleFormSubmit} className="user-details">
//             <div className="input-box">

//               <h2>Basic detials</h2>

//               <label htmlFor="fullName" className="form-label">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="form-input"
//                 id="fulltName"
//                 name="fullName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Enter Your Full Name"
//                 required
//               />
//             </div>
//             <div className="input-box">
//               <label className="form-label">Gender</label>
//               <select
//                 className="form-select"
//                 name="course"
                
//                 onChange={handleChange}
//                 required
//               >
//                 <option className="option-field" value="">
//                   Select Gender
//                 </option>
//                 <option className="option-field" value="male">
//                   Male
//                 </option>
//                 <option className="option-field" value="female">
//                   Female
//                 </option>
//                 <option className="option-field" value="other">
//                   Other
//                 </option>
//               </select>
//             </div> 
//             <div className="input-box">
//               <label className="form-label">User Type</label>
//               <select
//                 className="form-select"
//                 name="userType"
//                 value={formData.userType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option className="option-field" value="">
//                   Select User Type
//                 </option>
//                 <option className="option-field" value="student">
//                   Student
//                 </option>
//                 <option className="option-field" value="teacher">
//                   Teacher
//                 </option>
//                 <option className="option-field" value="recruiter">
//                   Recruiter
//                 </option>
//               </select>
//             </div>
//             <div className="input-box">
//               <label htmlFor="email" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 className="form-input"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Your Email Id"
//                 required
//               />
//             </div>
//             <h2>Education</h2>
//             <div className="input-box">
//               <label htmlFor="currentDegree" className="form-label">
//                 Current Degree
//               </label>
//               <select
//                 className="form-select"
//                 name="currentDegree"
//                 value={formData.currentDegree}
//                 onChange={handleChange}
//                 required
//               >
//                 <option className="option-field" value="">
//                   Select Current Degree
//                 </option>
//                 <option className="option-field" value="Bachelor">
//                   Bachelor
//                 </option>
//                 <option className="option-field" value="Master">
//                   Master
//                 </option>
//                 <option className="option-field" value="PhD">
//                   PhD
//                 </option>
//               </select>
//             </div>

//             <div className="input-box">
//               <label htmlFor="courseSpecialization" className="form-label">
//                 Course Specialization
//               </label>
//               <select
//                 className="form-select"
//                 name="courseSpecialization"
//                 value={formData.courseSpecialization}
//                 onChange={handleChange}
//                 required
//               >
//                 <option className="option-field" value="">
//                   Select Course Specialization
//                 </option>
//                 <option className="option-field" value="Cs">
//                   Computer Engineering
//                 </option>
//                 <option className="option-field" value="It">
//                   Information Technology
//                 </option>
//                 <option className="option-field" value="Mech">
//                   Mechanical Engineering
//                 </option>
//                 <option className="option-field" value="Extc">
//                   EXTC Engineering
//                 </option>
//                 <option className="option-field" value="Mech">
//                   Mechanical Engineering
//                 </option>
//               </select>
//             </div>
//             <div className="input-box">
//               <label htmlFor="currentYear" className="form-label">
//                 Current Year
//               </label>
//               <input
//                 type="text"
//                 className="form-input"
//                 id="currentYear"
//                 name="currentYear"
//                 value={formData.currentYear}
//                 onChange={handleChange}
//                 placeholder="Enter Your Current Year"
//                 required
//               />
//             </div>

//             <h2>Skills and Projects </h2>
//             <div className="input-box">
//               <label htmlFor="skills" className="form-label">
//                 Skills
//               </label>
//               <input
//                 type="text"
//                 className="form-input"
//                 id="skills"
//                 name="skills"
//                 value={formData.skills}
//                 onChange={handleChange}
//                 placeholder="Enter Your Skills"
//               />
//             </div>
//             <div className="input-box">
//               <label htmlFor="describeInterest" className="form-label">
//                 Describe Interests{" "}
//               </label>
//               <textarea
//                 className="form-input"
//                 row="4"
//                 col="10"
//                 id="describeInterest"
//                 name="describeInterest"
//                 value={formData.describeInterest}
//                 onChange={handleChange}
//                 placeholder="Describe your interests in the above mentioned skills.."
//               ></textarea>
//             </div>
//             <div className="input-box">
//               <label htmlFor="projectLink" className="form-label">
//                 Upload Link of Project
//               </label>
//               <input
//                 type="text"
//                 className="form-input"
//                 id="projectLink"
//                 name="projectLink"
//                 value={formData.projectLink}
//                 onChange={handleChange}
//                 placeholder="Enter Upload Link"
//               />
//             </div>

//             <h2>Socail Links </h2>
//             <div className="CI-input-box">
//               <label htmlFor="linkedin" className="CI-form-label">
//                 LinkedIn
//               </label>
//               <input
//                 type="text"
//                 className="CI-form-input"
//                 id="linkedin"
//                 name="linkedin"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 placeholder="Enter Your LinkedIn Profile Link"
//               />
//             </div>
//             <div className="CI-input-box">
//               <label htmlFor="github" className="CI-form-label">
//                 GitHub
//               </label>
//               <input
//                 type="text"
//                 className="CI-form-input"
//                 id="github"
//                 name="github"
//                 value={formData.github}
//                 onChange={handleChange}
//                 placeholder="Enter Your GitHub Profile Link"
//               />
//             </div>

//             <div className="CI-input-box">
//               <label htmlFor="instagram" className="CI-form-label">
//                 Instagram
//               </label>
//               <input
//                 type="text"
//                 className="CI-form-input"
//                 id="instagram"
//                 name="instagram"
//                 value={formData.instagram}
//                 onChange={handleChange}
//                 placeholder="Enter Your Instagram Profile Link"
//               />
//             </div>
//             {/* <div className="input-box">
//                             <label htmlFor="password" className="form-label">Password</label>
//                             <input type="password" className="form-input" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' required />
//                         </div>
//                         <div className="input-box">
//                             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//                             <input type="password" className="form-input" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
//                         </div> */}

//             <button type="submit" className="btn">
//               Next
//             </button>
//           </form>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditBasicDetails;


// EditProfile.jsx

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
      <div className="card">
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
      

      <div className="card">
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
      <div className="card">
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

      <div className="card">
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

