import React from 'react';
import './NavBar.css'; // Import the CSS styles

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="nav-list">
        <li className="nav-clickable-item">Explore</li>
        <li className="nav-clickable-item">Problems</li>
        <li className="nav-clickable-item">Contest</li>
        <li className="nav-clickable-item">Discuss</li>
        <li className="nav-clickable-item">Store</li>
      </ul>
      <ul className="nav-list">
        <li className="nav-clickable-item">Account</li>
        <li className="nav-clickable-item">Premium</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
