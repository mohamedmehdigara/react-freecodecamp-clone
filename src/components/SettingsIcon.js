import React, { useState } from 'react';

const SettingsIcon = ({ onClick }) => {
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
    <div className="settings-icon">
      <span onClick={toggleSettings}>
        <button>Settings</button>
      </span>
      {showSettings && (
        <div className="settings-dropdown">
          <div className="theme-options">
            {themeOptions.map((option, index) => (
              <button key={index} onClick={() => handleThemeChange(option.value)}>
                {option.label}
              </button>
            ))}
          </div>
          <div className="language-options">
            {languageOptions.map((option, index) => (
              <button key={index} onClick={() => handleLanguageChange(option.value)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsIcon;
