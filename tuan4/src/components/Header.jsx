// Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🥐</span>
        <h2>Cheffify</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search recipes..." />
      </div>
      <nav className="nav-links">
        <ul>
          <li>What to cook</li>
          <li>Recipes</li>
          <li>Ingredients</li>
          <li>Occasions</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="user-profile">
        <span>Your Recipe Box</span>
        <img src="avatar.png" alt="User Profile Picture" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;