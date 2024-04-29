import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSettingsIcon = styled.div`
  position: relative;
`;

const SettingsButton = styled.button`
  background-color: white;
  border: none;
  color: #333;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ThemeOptions = styled.div`
  margin-bottom: 10px;
`;

const LanguageOptions = styled.div`
  margin-top: 10px;
`;

const SettingsIcon = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('light');

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // Apply theme change logic here (e.g., update CSS classes)
    document.body.className = theme === 'light' ? '' : 'dark-theme';
  };

  const handleLanguageChange = (language) => {
    // Implement language change logic here
    console.log(`Selected language: ${language}`);
  };

  // Theme options
  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  // Language options
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    // Add more language options as needed
  ];

  return (
    <StyledSettingsIcon>
      <SettingsButton onClick={toggleSettings}>Settings</SettingsButton>
      <Dropdown show={showSettings}>
        <ThemeOptions>
          {themeOptions.map((option, index) => (
            <button key={index} onClick={() => handleThemeChange(option.value)}>
              {option.label}
            </button>
          ))}
        </ThemeOptions>
        <LanguageOptions>
          {languageOptions.map((option, index) => (
            <button key={index} onClick={() => handleLanguageChange(option.value)}>
              {option.label}
            </button>
          ))}
        </LanguageOptions>
      </Dropdown>
    </StyledSettingsIcon>
  );
};

export default SettingsIcon;
