import React, { useState } from 'react';
import Settings from './Settings';

const LanguageSelector = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="language-selector-container">
      <span className="language-selector" onClick={toggleSettings}>
        {/* Icon for language selection */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 10l5 5 5-5H7z"/>
        </svg>
      </span>
      {showSettings && (
        <div className="settings-list">
          <Settings />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
