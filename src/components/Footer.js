import React from 'react';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

const Footer = ({ onThemeChange, onLanguageChange }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Your Website</p>
      </div>
      <div className="footer-settings">
        <div className="settings-list">
          <div>
            <label>Theme</label>
            <ThemeSelector onChange={onThemeChange} />
          </div>
          <div>
            <label>Language</label>
            <LanguageSelector onChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
