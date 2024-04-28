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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="M12 2C6.48 2 2 6.48 2 12c0 2.59 1.05 5.2 3.04 7.07L12 22l6.96-2.93C20.95 17.2 22 14.59 22 12c0-5.52-4.48-10-10-10zm1 17h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
        </svg>
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
