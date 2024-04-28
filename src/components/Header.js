import React, { useState } from 'react';
import FreeCodeCampLogo from './FreecodecampLogo';
import NotificationBell from './NotificationBell';
import Notification from './Notification';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

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
