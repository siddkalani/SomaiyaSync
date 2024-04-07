import React, { useState } from "react";
import "./login.css";
import boy from "./boy.svg";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  const checkPass = (e) => {
    setPass(e.target.value);
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    if (regex.test(email)) {
      setError("valid email address");
    } else if (email === "") {
      setError("Please enter email");
    } else if (!regex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }

    if (passwordRegex.test(pass)) {
      setMessage("valid password");
    } else if (pass === "") {
      setMessage("Please enter password");
    } else if (!passwordRegex.test(pass)) {
      setMessage("Please enter a valid password()");
    } else {
      setMessage("");
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
              <a href="#" className="orange-content">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
