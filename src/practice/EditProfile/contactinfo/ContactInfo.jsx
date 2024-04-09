//ContactInformation.jsx


import React, { useState } from 'react';
import './ContactInfo.css';


function EditContactInformation() {
    const [formData, setFormData] = useState({
        linkedin: '',
        instagram: '',
        whatsapp: '',
        facebook: '',
        github: '',
        twitter: '',
        dribbble: '',
        figma: '',
        codepen: '',
        leetcode:''
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
        <div className="CI-container CI-body">
            <div className="CI-content">
                <div className="CI-edit-section">
                    <h1 className="CI-section-title">Edit Profile</h1>
                    <div className="CI-edit-links">
                        <a href="#" className="CI-edit-link">Basic Details</a>
                        <a href="#" className="CI-edit-link">Education</a>
                        <a href="#" className="CI-edit-link">Skills</a>
                        <a href="#" className="CI-edit-link">Project</a>
                        <a href="#" className="CI-edit-link">Contact Information</a>
                    </div>
                </div>
                <div className="CI-form-section">
                    <h1 className="CI-section-title">Contact Information</h1>
                    <form onSubmit={handleSubmit} className='user-details'>
                        <div className="CI-input-box">
                            <label htmlFor="linkedin" className="CI-form-label">LinkedIn</label>
                            <input type="text" className="CI-form-input" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder='Enter Your LinkedIn Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="github" className="CI-form-label">GitHub</label>
                            <input type="text" className="CI-form-input" id="github" name="github" value={formData.github} onChange={handleChange} placeholder='Enter Your GitHub Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="dribbble" className="CI-form-label">Dribbble</label>
                            <input type="text" className="CI-form-input" id="dribbble" name="dribbble" value={formData.dribbble} onChange={handleChange} placeholder='Enter Your Dribbble Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="figma" className="CI-form-label">Figma</label>
                            <input type="text" className="CI-form-input" id="figma" name="figma" value={formData.figma} onChange={handleChange} placeholder='Enter Your Figma Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="codepen" className="CI-form-label">Codpen</label>
                            <input type="text" className="CI-form-input" id="codepen" name="codepen" value={formData.codepen} onChange={handleChange} placeholder='Enter Your Codepen Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="leetcode" className="CI-form-label">LeetCode</label>
                            <input type="text" className="CI-form-input" id="leetcode" name="leetcode" value={formData.leetcode} onChange={handleChange} placeholder='Enter Your LeetCode Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="instagram" className="CI-form-label">Instagram</label>
                            <input type="text" className="CI-form-input" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder='Enter Your Instagram Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="whatsapp" className="CI-form-label">WhatsApp Number</label>
                            <input type="text" className="CI-form-input" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder='Enter Your WhatsApp Number' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="facebook" className="CI-form-label">Facebook</label>
                            <input type="text" className="CI-form-input" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder='Enter Your Facebook Profile Link' />
                        </div>
                        <div className="CI-input-box">
                            <label htmlFor="twitter" className="CI-form-label">Twitter</label>
                            <input type="text" className="CI-form-input" id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} placeholder='Enter Your Twitter Profile Link' />
                        </div>
                        <button type="submit" className="CI-btn">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EditContactInformation;





