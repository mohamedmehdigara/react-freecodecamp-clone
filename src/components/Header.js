import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import FreeCodeCampLogo from './FreecodecampLogo';
import NotificationBell from './NotificationBell';
import Notification from './Notification';
import SettingsIcon from './SettingsIcon'; // Import the SettingsIcon component
import ThemeSelector from './ThemeSelector'; // Import the ThemeSelector component
import LanguageSelector from './LanguageSelector'; // Import the LanguageSelector component

// Styled components
const HeaderContainer = styled.header`
  /* Add your styles here */
  background-color: black
  padding: 10px;
`;

const Nav = styled.nav`
  /* Add your styles here */
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.div`
  /* Add your styles here */
  margin-right: auto;
`;

const HeaderMenu = styled.ul`
  /* Add your styles here */
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const HeaderMenuItem = styled.li`
  /* Add your styles here */
  margin-right: 20px;
`;

const HeaderNotifications = styled.div`
  /* Add your styles here */
  position: relative;
  margin-left: 20px;
`;

const NotificationsList = styled.div`
  /* Add your styles here */
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1;
`;

const HeaderSettings = styled.div`
  /* Add your styles here */
  margin-left: 20px;
`;

const SettingsList = styled.div`
  /* Add your styles here */
`;

const HeaderLogin = styled.div`
  /* Add your styles here */
  margin-left: auto;
`;

const Header = ({ onThemeChange, onLanguageChange }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Settings options
  const settingsOptions = [
    { label: 'Theme', component: <ThemeSelector onChange={onThemeChange} /> },
    { label: 'Language', component: <LanguageSelector onChange={onLanguageChange} /> },
    // Add more settings options as needed
  ];

  return (
    <HeaderContainer className="header-container">
      <Nav className="header-nav">
        <HeaderLogo className="header-logo">
          <FreeCodeCampLogo />
        </HeaderLogo>
        <HeaderMenu className="header-menu">
          <HeaderMenuItem><a href="/">Home</a></HeaderMenuItem>
          <HeaderMenuItem><a href="/learn">Learn</a></HeaderMenuItem>
          <HeaderMenuItem><a href="/certifications">Certifications</a></HeaderMenuItem>
          <HeaderMenuItem><a href="/forum">Forum</a></HeaderMenuItem>
          <HeaderMenuItem><a href="/news">News</a></HeaderMenuItem>
          <HeaderMenuItem><a href="/contact">Contact</a></HeaderMenuItem>
          <HeaderMenuItem><a href="/CareerCenter">Career Center</a></HeaderMenuItem>

          {/* Add more menu items as needed */}
        </HeaderMenu>
        <HeaderNotifications className="header-notifications">
          <NotificationBell onClick={toggleNotifications} />
          {showNotifications && (
            <NotificationsList className="notifications-list">
              {/* Render notifications here */}
              <Notification type="info" message="New course available: React Advanced Techniques" />
              {/* Add more notifications as needed */}
            </NotificationsList>
          )}
        </HeaderNotifications>
        <HeaderSettings className="header-settings">
          <SettingsIcon onClick={toggleSettings} /> {/* Use SettingsIcon instead of button */}
          {showSettings && (
            <SettingsList className="settings-list">
              {settingsOptions.map((option, index) => (
                <div key={index}>
                  <label>{option.label}</label>
                  {option.component}
                </div>
              ))}
            </SettingsList>
          )}
        </HeaderSettings>
        <HeaderLogin className="header-login">
          <button>Login</button>
          <button>Sign Up</button>
          <a href="/profile">Profile</a>
        </HeaderLogin>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
