//Education.jsx


import React, { useState } from 'react';
import './Education.css';
import { Link } from 'react-router-dom';


function EditEducation() {
    const [formData, setFormData] = useState({
        currentDegree: '',
        courseSpecialization: '',
        course: '',
        currentYear: '',
        passingYear: '',
        percentage: '',
        cgpa: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };


    return (
        <div className="container body">
            <div className="content">
                <div className="edit-section">
                    <h1 className="section-title">Edit Profile</h1>
                    <div className="edit-links">
                    <Link to="/Editprofile"> <div className="edit-link">Basic Details</div> </Link>
                        <Link to="/education">  <div className="edit-link">Education</div></Link>
                        <Link to="/skills"> <div className="edit-link">Skills</div></Link>
                        <Link to="/project"> <div className="edit-link">Project</div></Link>
                        <Link to="/contactInfo"> <div className="edit-link">Contact Information</div></Link>
                    </div>
                </div>
                <div className="form-section">
                    <h1 className="section-title">Education</h1>
                    <form onSubmit={handleSubmit} className='user-details'>
                        <div className="input-box">
                            <label htmlFor="currentDegree" className="form-label">Current Degree</label>
                            <select className="form-select" name="currentDegree" value={formData.currentDegree} onChange={handleChange} required>
                                <option className='option-field' value="">Select Current Degree</option>
                                <option className='option-field' value="Bachelor">Bachelor</option>
                                <option className='option-field' value="Master">Master</option>
                                <option className='option-field' value="PhD">PhD</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="courseSpecialization" className="form-label">Course Specialization</label>
                            <select className="form-select" name="courseSpecialization" value={formData.courseSpecialization} onChange={handleChange}required>
                                <option className='option-field' value="">Select Course Specialization</option>
                                <option className='option-field' value="Bachelor">Bachelor</option>
                                <option className='option-field' value="Master">Master</option>
                                <option className='option-field' value="PhD">PhD</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="course" className="form-label">Course</label>
                            <select className="form-select" name="course" value={formData.course} onChange={handleChange}required>
                                <option className='option-field' value="">Select Course</option>
                                <option className='option-field' value="Bachelor">Bachelor</option>
                                <option className='option-field' value="Master">Master</option>
                                <option className='option-field' value="PhD">PhD</option>
                            </select>                        </div>
                        <div className="input-box">
                            <label htmlFor="currentYear" className="form-label">Current Year</label>
                            <input type="text" className="form-input" id="currentYear" name="currentYear" value={formData.currentYear} onChange={handleChange} placeholder='Enter Your Current Year' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="passingYear" className="form-label">Passing Year</label>
                            <input type="text" className="form-input" id="passingYear" name="passingYear" value={formData.passingYear} onChange={handleChange} placeholder='Enter Your Passing Year' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="percentage" className="form-label">Percentage</label>
                            <input type="text" className="form-input" id="percentage" name="percentage" value={formData.percentage} onChange={handleChange} placeholder='Enter Your Percentage' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="cgpa" className="form-label">CGPA</label>
                            <input type="text" className="form-input" id="cgpa" name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder='Enter Your CGPA' />
                        </div>
                        <button type="submit" className="btn">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EditEducation;



