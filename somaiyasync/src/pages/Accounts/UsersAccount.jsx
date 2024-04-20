import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ContentTop from "../../components/ContentTop/ContentTop";
import Sidebar from "../../layout/Sidebar/Sidebar";
// import ContentTop from "../../components/ContentTop/ContentTop";
import { FaTwitter ,FaGithub,FaLinkedin, FaGit, FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const UsersAccount = () => {
  const { username } = useParams();
  const locate = useLocation();
  //   const topName = locate.state.topName;
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true); // Set loading to true
      // setError(null); // Clear any previous errors

      try {
        const accessToken = localStorage.getItem("accessToken");
        // const username = localStorage.getItem("");
        // const5
        const response = await axios.get(
          `http://localhost:4200/api/contacts/${username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("User Data Response:", response.data);

        if (!response.data) {
          throw new Error("Failed to fetch user data");
        }

        // Validate response data (optional)
        if (!response.data || response.data.length === 0) {
          throw new Error("Invalid user data format");
        }

        setUserData(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // setError(error.message); // Set error message
      } finally {
        setIsLoading(false); // Set loading to false regardless of success/failure
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="">
      <div className="whole-main">
        <div className="app">
          {/* <Sidebar /> */}
          <div className="user-main-content">
            {/* <ContentTop/> */}
            <div className="user-account-main">
              <div className="account-container">
                <div className="left-side">
                  <div className="left-upper">
                    <div className="profile-img"></div>
                    <div className="profile-info">
                      {/* <h1>Full name: {userData?.fname}</h1> */}
                      <h1>
                        {userData?.fname ? ` ${userData.fname}` : "Full Name"}
                      </h1>

                      <p></p>
                      <div className="profile-btn">
                        <button className="message">Share</button>
                      </div>
                    </div>
                  </div>
                  <div className="left-lower">
                    {" "}
                    <div className="website">
                     <div><FaGithub color="white" size={20}/></div>
                     <div className="gray-name">Github :   <Link to={`${userData?.personalInfo?.github}`}>  {userData?.personalInfo?.github}{" "} </Link> </div>{" "}
                    </div>{" "}
                    <div className="twitter website">
                    <div><FaLinkedin  color="white" size={20}/></div>
                     <div className="gray-name">LinkedIn : <Link to={`${userData?.personalInfo?.linkedIn}`}>  {userData?.personalInfo?.linkedIn}{" "} </Link> </div>{" "}
                    </div>{" "}
                    {/* <div className="facebook website">
                    <div><FaFacebook  color="white" size={20}/></div>
                     <div className="gray-name">Facebook : </div>{" "}
                    </div>{" "} */}
                    <div className="instagram website">
                    <div><IoLogoInstagram  color="white" size={20}/></div>
                     <div className="gray-name">Instagram :<Link to={`${userData?.personalInfo?.insta}`}>  {userData?.personalInfo?.insta}{" "} </Link>  </div>{" "}
                    </div>{" "}
                  </div>
                  {/* <div className="left-btn">
                    <Link to="/editProfile">
                      <button className="edit-prof-btn">Edit Profile</button>
                    </Link>
                  </div> */}
                </div>
                <div className="right-side">
                  <div className="right-upper">
                    <div className="personal-info">
                      {isLoading ? (
                        <p>Loading User Data...</p>
                      ) : userData ? (
                        <>
                          <div className="">Full Name: {userData.fname}</div>
                          <div className="">Username: {userData.username}</div>
                          <div className="">Email: {userData.email}</div>
                          <div className="">Gender: {userData.gender}</div>
                          <div className="">User Type: {userData.usertype}</div>
                          <div className="">
                            Course: {userData.education?.currdegree}
                          </div>
                          <div className="">
                            Specialization: {userData.education?.currcourse}
                          </div>
                          <div className="">
                            Passing year: {userData.education?.passyear}
                          </div>
                          <div className="">
                            Project Link: {userData.project?.projectLink}
                          </div>
                          <div className="">
                            Skills: {userData.skills?.skillss}
                          </div>
                          <div className="">
                            Skills Description: {userData.skills?.skillsDescp}
                          </div>
                          {/* <div className="website">
                            <p>
                              Github:{" "}
                              <Link to={`${userData.personalInfo?.github}`}>
                                {userData.personalInfo?.github}{" "}
                              </Link>{" "}
                            </p>{" "}
                          </div>{" "}
                          <div className="facebook">
                            <p>
                              Linkedin:{" "}
                              <Link to={`${userData.personalInfo?.linkedIn}`}>
                                {userData.personalInfo?.linkedIn}{" "}
                              </Link>{" "}
                            </p>{" "}
                          </div>{" "}
                          <div className="instagram">
                            <p>
                              Instagram:{" "}
                              <Link to={`${userData.personalInfo?.insta}`}>
                                {userData.personalInfo?.insta}{" "}
                              </Link>{" "}
                            </p>{" "}
                          </div>{" "} */}
                        </>
                      ) : (
                        <p>No user data found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersAccount;
