import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

const SettingsContainer = styled.div`
  position: relative;
`;

const SettingsIcon = styled.span`
  cursor: pointer;
`;

const SettingsList = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Settings = ({ onThemeChange, onLanguageChange }) => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Handler function for theme change
  const handleThemeChange = (theme) => {
    onThemeChange(theme); // Propagate theme change to the parent component
  };

  // Handler function for language change
  const handleLanguageChange = (language) => {
    onLanguageChange(language); // Propagate language change to the parent component
  };

  return (
    <div className="settings-container">
      <span className="settings-icon" onClick={toggleSettings}>
        {/* Icon for settings */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.25 12c0-.41-.16-.79-.43-1.07l1.42-1.42c.2-.2.2-.51 0-.71l-1.42-1.42c-.28-.28-.66-.43-1.07-.43l-1.42 1.42c-.2.2-.51.2-.71 0l-1.42-1.42c-.28-.28-.66-.43-1.07-.43s-.79.16-1.07.43l-1.42 1.42c-.2.2-.51.2-.71 0l-1.42-1.42c-.28-.28-.66-.43-1.07-.43s-.79.16-1.07.43l-1.42 1.42c-.2.2-.51.2-.71 0L4.18 8.5c-.28-.28-.43-.66-.43-1.07s.16-.79.43-1.07l1.42-1.42c.2-.2.2-.51 0-.71L4.18 3.5c-.28-.28-.43-.66-.43-1.07s.16-.79.43-1.07l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.28-.28.66-.43 1.07-.43s.79.16 1.07.43l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.28-.28.66-.43 1.07-.43s.79.16 1.07.43l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.28-.28.66-.43 1.07-.43s.79.16 1.07.43l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.28-.28.66-.43 1.07-.43s.79.16 1.07.43l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.28-.28.66-.43 1.07-.43s.79.16 1.07.43l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l1.42-1.42c.39-.39 1.02-.39 1.41 0l1.42 1.42c.2.2.51.2.71 0l.71-.71c.39-.39.39-1.02 0-1.41L20.66 3c-.39-.39-1.02-.39-1.41 0l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41l1.42 1.42c.39.39.39 1.02 0 1.41l-.71.71c-.39.39-.39 1.02 0 1.41z"/>
        </svg>
      </span>
      {showSettings && (
        <div className="settings-list">
          {/* Theme selector component */}
          <ThemeSelector onThemeChange={handleThemeChange} />
          {/* Language selector component */}
          <LanguageSelector onLanguageChange={handleLanguageChange} />
          {/* Add more settings options as needed */}
        </div>
      )}
    </div>
  );
};

export default Settings;