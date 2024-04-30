import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import Settings from './Settings';

// Styled components
const LanguageSelectorContainer = styled.div`
  /* Add your styles here */
  position: relative;
`;

const LanguageSelectorIcon = styled.span`
  /* Add your styles here */
  cursor: pointer;
`;

const SettingsList = styled.div`
  /* Add your styles here */
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
`;

const LanguageSelector = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <LanguageSelectorContainer className="language-selector-container">
      <LanguageSelectorIcon className="language-selector" onClick={toggleSettings}>
        {/* Icon for language selection */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 10l5 5 5-5H7z"/>
        </svg>
      </LanguageSelectorIcon>
      {showSettings && (
        <SettingsList className="settings-list">
          <Settings />
        </SettingsList>
      )}
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
