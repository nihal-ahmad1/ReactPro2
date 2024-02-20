import React, { useState } from "react";
import Validation from "./LoginValidation";
 import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
    const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
        navigate("./home");
    }
  };
  return (
    <div className="mainFrame">
      
      <div className="mainContainer">
        <div className="firstBox">
          <img className="mainImage" src="cartoon-welcome.webp" alt="cartoon-welcome"/>
        </div>
        <div className="secondBox">
          <p className="topText">Login</p>
          <span className="login-message">Please login to continue</span>
          <form className="form1" onSubmit={handleSubmit}>
            <input
              className="inputFields"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
            />
            <span>
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </span>
            <input
              className="inputFields"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
            />
             <span>
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </span>
            <div className="passwordContainer">
              <div>
                <input type="checkbox" />
                <span className="logged-In">Keep me logged In</span>
              </div>
              <a href="#" className="Forgot-Password">
                Forgot Password
              </a>
            </div>

            <button className="login-button">Login</button>
          </form>
          <span className="withtext">or</span>
          <span className="withtext">Login With</span>
          <div className="images-conatiner">
            <img className="socialImages" src="twitterImage.jpg" />
            <img className="socialImages" src="google-logo.png" />
            <img className="socialImages" src="Facebook_logo.png" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
