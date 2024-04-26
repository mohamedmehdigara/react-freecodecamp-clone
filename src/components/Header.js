import React from 'react';
import FreeCodeCampLogo from './FreecodecampLogo';



const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
      <div className="header-logo"> 
          {/* Your Logo */}
          <FreeCodeCampLogo/>
        </div>
        <ul className="header-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/learn">Learn</a></li>
          <li><a href="/certifications">Certifications</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Add more menu items as needed */}
        </ul>
        <div className="header-login">
          <button>Login</button>
          <button>Sign Up</button>
          <a href="/profile">Profile</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
