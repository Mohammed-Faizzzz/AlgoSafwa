import React from 'react';
import './Login.css';
import googleSignInImage from './images/google-mark.png';
import githubSignInImage from './images/github-mark/github-mark.png';

const handleGoogleSignIn = () => {
    // Your sign-in logic here
  };

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>Welcome to Algonaught!</h1>
        <p>Are you ready to embark on a cosmic quest into the world of algorithms?</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" placeholder="Email" className="email-input" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="password-input" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <button className="google-button">
            <img src={googleSignInImage} alt="Google Sign In" className="oauth-icon" />
            Sign in with Google</button>
        <button className="github-button">
            <img src={githubSignInImage} alt="GitHub Sign In" className="oauth-icon" />
            Sign in with Github
        </button>
        <div className="signup-link">
          <span>don't have an account yet? </span>
          <a href="/signup" style = {{textDecoration: 'none'}} >Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
