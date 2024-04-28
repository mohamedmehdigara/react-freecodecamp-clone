import React, { useState } from 'react';
import FreeCodeCampLogo from './FreecodecampLogo';
import NotificationBell from './NotificationBell';
import Notification from './Notification';
import SettingsIcon from './SettingsIcon'; // Import the SettingsIcon component
import ThemeSelector from './ThemeSelector'; // Import the ThemeSelector component
import LanguageSelector from './LanguageSelector'; // Import the LanguageSelector component

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Settings options
  const settingsOptions = [
    { label: 'Theme', component: <ThemeSelector selectedTheme={selectedTheme} onChange={handleThemeChange} /> },
    { label: 'Language', component: <LanguageSelector selectedLanguage={selectedLanguage} onChange={handleLanguageChange} /> },
    // Add more settings options as needed
  ];

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-logo"> 
          {/* Your Logo */}
          <FreeCodeCampLogo />
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
        <div className="header-notifications">
          <NotificationBell onClick={toggleNotifications} />
          {showNotifications && (
            <div className="notifications-list">
              {/* Render notifications here */}
              <Notification type="info" message="New course available: React Advanced Techniques" />
              {/* Add more notifications as needed */}
            </div>
          )}
        </div>
        <div className="header-settings">
          <SettingsIcon onClick={toggleSettings} /> {/* Use SettingsIcon instead of button */}
          {showSettings && (
            <div className="settings-list">
              {settingsOptions.map((option, index) => (
                <div key={index}>
                  <label>{option.label}</label>
                  {option.component}
                </div>
              ))}
            </div>
          )}
        </div>
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
