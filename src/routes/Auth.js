import AuthForm from "../components/AuthForm";
import { authService, firebaseInstance } from "../fBase";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../res/logo512.png";
import "./Auth.css";
import AppRouter from "../components/Router";
import App from "../App";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
  };
  return (
    <div className="auth">
      <div className="authContainer">
        <img className="loginlogo" src={logo} alt="logo" />
        <AuthForm />
        <div className="authBtns">
          <button onClick={onSocialClick} name="google" className="authBtn">
            Continue with Google <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button onClick={onSocialClick} name="github" className="authBtn">
            Continue with Github <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Auth;
