// import React from "react";
// import "./register.css";

// const Register = () => {
//   return (
//     <div>
//       <div className="login-container">
//         <div className="register-main">
//           <div className="yellow"></div>
//           <div className="blue"></div>

//           <div className="register-form">
//             <div className="register-header">
//               <div className="register-sign-up">
//                 <h1>Sign-up</h1>
//               </div>
//             </div>
//             <div className="register-form-inputs">
//               <div className="register-input-user">
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   className="register-inputbox-pass"
//                 />
//               </div>

//               <div className="register-input-email">
//                 <input
//                   type="search"
//                   placeholder="E-mail"
//                   className="register-inputbox-email"
//                 />
//               </div>

//               <div className="register-input-pass">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="register-inputbox-pass"
//                 />
//               </div>

//               {/* <div className="register-input-pass">
//                             <input
//                                 type='password'
//                                 placeholder='Confirm password'
//                                 className='register-inputbox-pass'
//                             />
//                         </div> */}
//             </div>
//             <div className="register-btn">
//               <button>register</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//export default Register;

import React, { useState } from "react";
import "./register.css";
import axios from "axios"; // Import axios for making HTTP requests

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  // const [registrationSuccess, setRegistrationSuccess] = useState(false);
  // const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4200/api/users/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log("User registered:", response.data);
      setMsg(res.message);
      window.alert(
        "Registration successful! Check your email for verification."
      );
      // await sendVerificationEmail(response.data._id);
      // setVerificationSent(true);
    } catch (error) {
      // console.error("Registration failed:", error.response.data);
      // window.alert(
      //   "Already registered with this email! Check your email for verification if not verified yet!"
      // );
      // setErrorMessage("Registration failed! Check your email id");
    }
  };

  // const sendVerificationEmail = async (userId) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4200/api/users/verify?id=${userId}`
  //       // {
  //       //   username: username,
  //       //   email: email,
  //       //   password: password,
  //       // }
  //     );
  //     console.log("Verification email sent:", response.data);
  //     window.alert("You are verified");
  //     // handleVerificationSuccess(); // Call the function to handle verification success
  //   } catch (error) {
  //     console.error("Failed to send verification email:", error.response.data);
  //     window.alert("Failed to verify email");
  //   }
  // };
  // const sendVerificationEmail = async (userId) => {
  //   try {
  //     // Polling mechanism to check verification status
  //     const intervalId = setInterval(async () => {
  //       try {
  //         const verificationResponse = await axios.get(
  //           `http://localhost:4200/api/users/verify?id=${userId}`
  //         );
  //         if (verificationResponse.data.is_verified === 1) {
  //           clearInterval(intervalId); // Stop polling if verification is confirmed
  //           window.alert("You are verified");
  //           // handleVerificationSuccess(); // Call the function to handle verification success
  //         }
  //       } catch (error) {
  //         console.error("Failed to verify email:", error.response.data);
  //         clearInterval(intervalId); // Stop polling if an error occurs
  //         window.alert("Failed to verify email");
  //       }
  //     }, 5000); // Poll every 5 seconds (adjust interval as needed)
  //   } catch (error) {
  //     console.error(
  //       "Failed to start verification process:",
  //       error.response.data
  //     );
  //     window.alert("Failed to start verification process");
  //   }
  // };

  // Function to handle verification success
  // const handleVerificationSuccess = () => {
  //   setVerificationSuccess(true);
  //   window.alert("You are a verified user!");
  // };

  return (
    <div>
      <div className="login-container">
        <div className="register-main">
          <div className="yellow"></div>
          <div className="blue"></div>

          <div className="register-form">
            <div className="register-header">
              <div className="register-sign-up">
                <h1>Sign-up</h1>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="register-form-inputs">
                <div className="register-input-user">
                  <input
                    type="text"
                    placeholder="Username"
                    className="register-inputbox-pass"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="register-input-email">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="register-inputbox-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="register-input-pass">
                  <input
                    type="password"
                    placeholder="Password"
                    className="register-inputbox-pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {error && <div className="error_msg">{error}</div>}
              {msg && <div className="success_msg">{msg}</div>}
              <div className="register-btn">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
