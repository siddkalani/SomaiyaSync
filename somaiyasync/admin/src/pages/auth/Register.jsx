import  { useState } from "react";
import "./register.css";
import axios from "axios"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // setMsg(res.message);
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
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === "Username already exists!"
      ) {
        window.alert(
          "Username already exists! Please choose another username."
        );
      } else {
        window.alert(
          "Already registered with this email! Check your email for verification if not verified yet!"
        );
      }
    }
  };

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

              <div className="register-btn-div">
                <button className="register-btn" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
