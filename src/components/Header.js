import React from 'react';


const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-logo">
          {/* Your Logo */}
          <img src="your-logo.png" alt="Your Logo" />
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
