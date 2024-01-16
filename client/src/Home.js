import React from 'react';
import './Banner.css';
import NavBar from './NavBar.js';

function Home() {
  return (
  <>
    <NavBar></NavBar>
    <div className="banner-container">
      <div className="banner">
        <div className="banner-item" tabIndex="0">
          <h2>AlgoSafwa's Interview Crash Course:</h2>
          <p>System Design for Interviews and Beyond</p>
          <button className="banner-button">Start Learning</button>
        </div>
        <div className="banner-item" tabIndex="0">
          <h2>AlgoSafwa's Interview Crash Course:</h2>
          <p>Data Structures and Algorithms</p>
          <button className="banner-button">Start Learning</button>
        </div>
        <div className="banner-item" tabIndex="0">
          <h2>Top Interview Questions</h2>
          <button className="banner-button">Get Started</button>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
