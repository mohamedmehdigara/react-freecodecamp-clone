import React, { useState } from 'react';
import FreeCodeCampLogo from './FreecodecampLogo';
import NotificationBell from './NotificationBell';
import Notification from './Notification';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    { id: 1, type: 'info', message: 'New course available: React Advanced Techniques' },
    { id: 2, type: 'success', message: 'You completed the JavaScript Basics course!' },
    { id: 3, type: 'warning', message: 'Forum activity: New discussion on React Hooks' },
    { id: 4, type: 'error', message: 'Error: Unable to save your profile changes' },
    // Add more notification objects as needed
  ];
  
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-logo"> 
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
              {notifications.map(notification => (
                <Notification key={notification.id} type={notification.type} message={notification.message} />
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
