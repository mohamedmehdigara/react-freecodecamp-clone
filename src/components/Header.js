import React, { useState } from 'react';
import FreeCodeCampLogo from './FreecodecampLogo';
import NotificationBell from './NotificationBell';
import Notification from './Notification';
import Settings from './Settings'; // Import the Settings component

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false); // State for toggling Settings component

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Notification data (if needed)
  const notifications = [
    { type: 'info', message: 'New course available: React Advanced Techniques' },
    { type: 'success', message: 'You completed the JavaScript Basics course!' },
    { type: 'warning', message: 'Forum activity: New discussion on React Hooks' },
    { type: 'error', message: 'Error: Unable to save your profile changes' },
    // Add more notification objects as needed
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
              {notifications.map((notification, index) => (
                <Notification key={index} type={notification.type} message={notification.message} />
              ))}
            </div>
          )}
        </div>
        <div className="header-settings">
          <button onClick={toggleSettings}>Settings</button> {/* Button to toggle Settings component */}
          {showSettings && <Settings />} {/* Render Settings component if showSettings is true */}
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
