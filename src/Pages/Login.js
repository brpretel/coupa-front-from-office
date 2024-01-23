import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logoSignIn from "../logos/logo-no-background.svg";
import "../style/login.css";

function Login() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate();
  const toggleMode = (newMode) => {
    setMode(mode === newMode ? "" : newMode);
  };

  async function handleRegister(username, password, user_vertical) {
    try {
      const response = await axios.post(
        "https://coupa-backend-production.up.railway.app/auth/register",
        {
          headers: {
            "Content-Type": "application/json",
          },
          username,
          password,
          user_vertical,
          body: JSON.stringify(username, password, user_vertical),
        }
      );
      console.log(response.data);
      alert("Usuario creado con éxito. Por favor, inicia sesión.");
      toggleMode("sign-in-mode");
    } catch (error) {
      console.error("Error al registrar", error);
    }
  }

  async function handleLogin(username, password) {
    try {
      const response = await axios.post(
        "https://coupa-backend-production.up.railway.app/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      sessionStorage.setItem("access_token", response.data.access_token);
      navigate("/app");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  }

  function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password2").value;
    var message = document.getElementById("passwordMatchMessage");
    var SignUpButton = document.getElementById("SignUpButton");

    if (password === confirmPassword) {
      message.innerHTML = "Passwords match!";
      SignUpButton.disable = false;
    } else {
      message.innerHTML = "Passwords do not match!";
      SignUpButton.disable = true;
    }
  }

  return (
    <div className={`login-container ${mode}`}>
      <div className="signin-signup">
        {/* Formulario de Inicio de Sesión */}
        <form
          className="sign-in-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleLogin(formData.get("username"), formData.get("password"));
          }}
        >
          <div className="logo">
            <img src={logoSignIn}></img>
          </div>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input name="username" type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input name="password" type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <p className="account-text">
            Don't have an account?{" "}
            <a href="#" onClick={() => toggleMode("sign-up-mode")}>
              Sign up
            </a>
          </p>
        </form>

        {/* Formulario de Registro */}
        <form
          className="sign-up-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleRegister(
              formData.get("username"),
              formData.get("password"),
              formData.get("user_vertical")
            );
          }}
        >
          <div className="logo">
            <img src={logoSignIn}></img>
          </div>
          <h2 className="title">Sign up</h2>

          <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} />
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input
              onChange={checkPasswordMatch}
              id="password2"
              name="password2"
              type="password"
              placeholder="Password"
              required
            />
            <span id="passwordMatchMessage"></span>
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} />
            <select name="user_vertical" required>
              <option value="">Select User Vertical</option>
              <option value="Platform">Platform</option>
              <option value="Payment">Sourcing</option>
              <option value="Procure">Procure</option>
              <option value="Payment">Payment</option>
            </select>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="btn"
            id="SignUpButton"
          />
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <p className="account-text">
            Already have an account?{" "}
            <a href="#" onClick={() => toggleMode("sign-in-mode")}>
              Sign in
            </a>
          </p>
        </form>
      </div>

      <div className="panels-container">
        {/* Panel Izquierdo */}
        <div className="panel left-panel">
          <div className="content">
            <h3>Member of Coupa Internal SP Software?</h3>
            <p>Make sure to use your login Coupa Credentials to Login</p>
            <button className="btn" onClick={() => toggleMode("sign-in-mode")}>
              Sign in
            </button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>

        {/* Panel Derecho */}
        <div className="panel right-panel">
          <div className="content">
            <h3>Need To Register?</h3>
            <p>
              Please contact the admin or register with your Coupa Credentials
            </p>
            <button className="btn" onClick={() => toggleMode("sign-up-mode")}>
              Sign up
            </button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
