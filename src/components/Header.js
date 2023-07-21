import React from 'react';


const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-logo">
          Your Logo or Site Name
        </div>
        <ul className="header-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="header-login">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
