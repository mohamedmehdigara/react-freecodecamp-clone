import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="site-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
