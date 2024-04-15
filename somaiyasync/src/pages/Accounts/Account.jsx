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

// export default Account;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ContentTop from "../../components/ContentTop/ContentTop";
import Sidebar from "../../layout/Sidebar/Sidebar";

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
                      <p>Github: </p>{" "}
                    </div>{" "}
                    <div className="twitter">
                      <p>Twitter:</p>{" "}
                    </div>{" "}
                    <div className="facebook">
                      <p>Linkedin:</p>{" "}
                    </div>{" "}
                    <div className="instagram">
                      <p>Instagram:</p>{" "}
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
                          <div className="website">
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
