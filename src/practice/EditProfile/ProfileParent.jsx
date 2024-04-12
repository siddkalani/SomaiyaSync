import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditBasicDetails from "./basicDetails";
import EditEducation from "./Education";
import EditSkills from "./Skills";
import EditProject from "./Project";
import EditContactInformation from "./contactinfo";

// Function to obtain the access token from local storage
const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

function EditProfileContainer() {
  const [accessToken, setAccessToken] = useState(""); // State to store access token
  const [formData, setFormData] = useState({
    // Initial profile data
    basicDetails: {
      firstName: "",
      lastName: "",
      userName: "",
      dob: "",
      enrolId: "",
      gender: "",
      userType: "",
      email: "",
    },
    education: {
      currentDegree: "",
      courseSpecialization: "",
      currentYear: "",
      passingYear: "",
      percentage: "",
      cgpa: "",
    },
    skills: {
      skills: "",
      describeInterest: "",
    },
    project: {
      projectTitle: "",
      projectDescription: "",
      projectLink: "",
      technologiesUsed: "",
    },
    contactInfo: {
      linkedin: "",
      instagram: "",
      whatsapp: "",
      facebook: "",
      github: "",
      twitter: "",
      leetcode: "",
    },
  });

  // Effect to obtain the access token from local storage after component mounts
  useEffect(() => {
    const token = getAccessToken(); // Obtain access token from local storage
    if (token) {
      setAccessToken(token);
    } else {
      // Handle case where access token is not available (e.g., user is not logged in)
      console.error("Access token not found. User not logged in.");
    }
  }, []);

  // Function to update profile data
  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Send a POST request to the backend API with the profile data and access token
      const response = await fetch(`http://localhost:4200/api/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
        },
        body: JSON.stringify(formData), // Convert formData to JSON string
      });

      // Check if the request was successful
      if (response.ok) {
        // Reset the form data or perform any other actions after successful submission
        console.log("Profile details submitted successfully!");
      } else {
        // Handle errors if the request was not successful
        console.error("Failed to submit profile details:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/Editprofile">
          <EditBasicDetails
            formData={formData}
            updateFormData={updateFormData}
          />
        </Route>
        <Route path="/education">
          <EditEducation formData={formData} updateFormData={updateFormData} />
        </Route>
        <Route path="/skills">
          <EditSkills formData={formData} updateFormData={updateFormData} />
        </Route>
        <Route path="/project">
          <EditProject formData={formData} updateFormData={updateFormData} />
        </Route>
        <Route path="/contactInfo">
          <EditContactInformation
            formData={formData}
            updateFormData={updateFormData}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default EditProfileContainer;
