import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="site-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
