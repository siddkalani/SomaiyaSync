import React, { useState } from "react";
import "./login.css";
import boy from "./boy.svg";
import Register from "../register/Register";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  // const locate = useLocation();
  // const topName = locate.state.topName;

  const navigate = useNavigate();

  const checkPass = (e) => {
    setPass(e.target.value);
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4200/api/users/login",
        { email, password: pass }
      );

      if (
        response.status === 200 &&
        response.data.accessToken &&
        response.data.user.is_verified === 1
      ) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("username", response.data.user.username);

        const accesstoken = localStorage.getItem("accessToken");
        const EmailUser = localStorage.getItem("userEmail");
        const userName = localStorage.getItem("username");

        console.log(accesstoken);
        console.log(EmailUser);
        console.log(userName);
        navigate("/home", {
          state: {
            topName: "home",
          },
        });
      } else if (
        response.status === 200 &&
        response.data.accessToken &&
        response.data.user.is_verified === 0
      ) {
        setError("Please verify your email to login.");
      } else {
        setError("User not registered");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-main">
        <div className="yellow"></div>
        <div className="blue"></div>
        <div className="login-img">
          <img src={boy} alt="" />
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="form-header">
              <div className="sign-in">
                <h1>
                  <span className="form-header-color">Sign in</span>
                </h1>
              </div>
            </div>

            <div className="form-inputs">
              <div className="input-email">
                <input
                  type="search"
                  placeholder="E-mail"
                  className="inputbox-email"
                  value={email}
                  onChange={checkEmail}
                />
                <p className="email-error">{error}</p>
              </div>

              <div className="input-pass">
                <input
                  type="password"
                  placeholder="Password"
                  value={pass}
                  onChange={checkPass}
                  className="inputbox-pass"
                />
                <p className="email-error">{message}</p>
              </div>
            </div>
            <div className="login-btn">
              <button className="sign-in-btn" onClick={handleSubmit}>
                sign in
              </button>
            </div>
          </div>
        </form>
        <div className="login-content">
          <div className="login-content-header">
            <h1>
              Sign in to <br />
              SomaiyaSync
            </h1>
          </div>
          <div className="login-content-main">
            <p>
              if you don't have an account <br /> You can{" "}
              <Link to="/register">
                <a href="" className="orange-content">
                  Register here
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
