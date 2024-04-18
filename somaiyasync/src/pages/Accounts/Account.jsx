// import React from "react";
// import "./Account.css";
// import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
// import ContentTop from "../../components/ContentTop/ContentTop";
// import Sidebar from "../../layout/Sidebar/Sidebar";
// import { useState, useEffect } from "react";
// const Account = () => {
//   const locate = useLocation();
//   const topName = locate.state.topName;
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data from backend API
//     const fetchUserData = async () => {
//       try {
//         const accessToken = localStorage.getItem("accessToken"); // Fetch access token from local storage

//         const response = await fetch("http://localhost:4200/api/contacts", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`, // Pass access token in the Authorization header
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserData(data); // Set the fetched user data to state
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData(); // Call the fetchUserData function when the component mounts
//   }, []);

//   return (
//     <div className="">
//       <div className="whole-main">
//         <div className="app">
//           <Sidebar />
//           <div className="main-content">
//             <ContentTop topName={topName} />
//             <div className="account-main">
//               <div className="account-container">
//                 <div className="left-side">
//                   <div className="left-upper">
//                     <div className="profile-img"></div>
//                     <div className="profile-info">
//                       <h1>Full name: {userData?.fname}</h1>
//                       <p></p>
//                       <div className="profile-btn">
//                         {/* <button className='follow white-hover'>Resume</button> */}
//                         <button className="message">Share</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="left-lower">
//                     <div className="website">
//                       <p>Github:</p>
//                     </div>
//                     <div className="twitter">
//                       <p>Twitter:</p>
//                     </div>
//                     <div className="facebook">
//                       <p>Linkedin:</p>
//                     </div>
//                     <div className="instagram">
//                       <p>Instagram:</p>
//                     </div>
//                   </div>
//                   <div className="left-btn">
//                     <Link to="/editProfile">
//                       <button className="edit-prof-btn">Edit Profile</button>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="right-side">
//                   <div className="right-upper">
//                     <div className="personal-info">
//                       {userData ? (
//                         <>
//                           <div className="">Full Name: {userData.fname}</div>
//                           <div className="">Email:</div>
//                           <div className="">Gender:</div>
//                           <div className="">User Type:</div>
//                           <div className="">Course: </div>
//                           <div className="">Specialization: </div>
//                           <div className="">Passing year: </div>
//                           <div className="">Skills: </div>
//                           <div className="">Interests: </div>
//                           <div className="">Project links: </div>{" "}
//                         </>
//                       ) : (
//                         <p> Loading User Data...</p>
//                       )}
//                     </div>
//                   </div>
//                   {/* <div className="right-lower">
//             <div className="right-lower-left">
//               <div className='right-lower-left-header'>Leaderboard Highscore</div>
//               <div className='right-lower-left-container'>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//               </div>
//             </div>
//             <div className="right-lower-right">
//               <div className='right-lower-right-header'>Leaderboard Highscore</div>
//               <div className='right-lower-right-container'>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//                 <h5>Css relay:</h5>
//               </div>
//             </div>
//           </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ContentTop from "../../components/ContentTop/ContentTop";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { FaTwitter ,FaGithub,FaLinkedin, FaGit, FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
// import { Instagram , Github  } from 'lucide-react';
import { CgProfile } from "react-icons/cg";
import user from "./user.svg"

const Account = () => {
  const { username } = useParams();
  const locate = useLocation();
  const topName = locate.state.topName;
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
        const response = await axios.get(`http://localhost:4200/api/contacts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
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
          <Sidebar />
          <div className="main-content">
            <ContentTop topName={topName} />
            <div className="account-main">
              <div className="account-container">
                <div className="left-side">
                  <div className="left-upper">
                    <div className="profile-img"><img src={user} alt="" /></div>
                    <div className="profile-info">
                      {/* <h1>Full name: {userData?.fname}</h1> */}
                      <span className="gray-name"> <h1>
                        {userData?.fname ? ` ${userData.fname}` : "Full Name"}
                      </h1>
                      </span>

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
                     <div>Github: </div>{" "}
                    </div>{" "}
                    <div className="twitter website">
                    <div><FaTwitter  color="white" size={20}/></div>
                     <div>Twitter: </div>{" "}
                    </div>{" "}
                    <div className="facebook website">
                    <div><FaFacebook  color="white" size={20}/></div>
                     <div>Facebook: </div>{" "}
                    </div>{" "}
                    <div className="instagram website">
                    <div><IoLogoInstagram  color="white" size={20}/></div>
                     <div>Instagram: </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="left-btn">
                    <Link to="/editProfile">
                      <button className="edit-prof-btn">Edit Profile</button>
                    </Link>
                  </div>
                </div>
                <div className="right-side">
                  <div className="right-upper">
                    <div className="personal-info">
                      {isLoading ? (
                        <p>Loading User Data...</p>
                      ) : userData ? (
                        <>
                          <div className="input-fields"><span className="gray-name">Full Name: </span>{userData.fname}</div>
                          <div className="input-fields"><span className="gray-name">Username:</span> {userData.username}</div>
                          <div className="input-fields"><span className="gray-name">Email: </span>{userData.email}</div>
                          <div className="input-fields"><span className="gray-name">Gender: </span> {userData.gender}</div>
                          <div className="input-fields"><span className="gray-name"> User Type:</span> {userData.usertype}</div>
                          <div className="input-fields">
                           <span className="gray-name">Course:</span> {userData.education?.currdegree}
                          </div>
                          <div className="input-fields">
                            <span className="gray-name">Specialization: </span>{userData.education?.currcourse}
                          </div>
                          <div className="input-fields">
                           <span className="gray-name">Passing year: </span> {userData.education?.passyear}
                          </div>
                          <div className="input-fields">
                            <span className="gray-name">Project Link: </span>{userData.project?.projectLink}
                          </div>
                          <div className="input-fields">
                            <span className="gray-name">Skills: </span>{userData.skills?.skillss}
                          </div>
                          <div className="input-fields">
                            <span className="gray-name">Skills Description:</span> {userData.skills?.skillsDescp}
                          </div>
                          <div className="website">
                            <p>
                             <span className="gray-name"> Github:</span>{" "}
                              <Link to={`${userData.personalInfo?.github}`}>
                                {userData.personalInfo?.github}{" "}
                              </Link>{" "}
                            </p>{" "}
                          </div>{" "}
                          <div className="facebook">
                            <p>
                            <span className="gray-name">Linkedin:</span>{" "}
                              <Link to={`${userData.personalInfo?.linkedIn}`}>
                                {userData.personalInfo?.linkedIn}{" "}
                              </Link>{" "}
                            </p>{" "}
                          </div>{" "}
                          <div className="instagram">
                            <p>
                            <span className="gray-name">Instagram:</span>{" "}
                              <Link to={`${userData.personalInfo?.insta}`}>
                                {userData.personalInfo?.insta}{" "}
                              </Link>{" "}
                            </p>{" "}
                          </div>{" "}
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

export default Account;
