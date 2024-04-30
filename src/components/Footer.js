import React from 'react';
import styled from 'styled-components';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

const StyledFooter = styled.footer`
  /* Add your styles here */
  background-color: #f8f9fa;
  padding: 20px;
`;

const FooterContent = styled.div`
  /* Add your styles here */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterSettings = styled.div`
  /* Add your styles here */
`;

const SettingsList = styled.div`
  /* Add your styles here */
  display: flex;
`;

const SettingsItem = styled.div`
  /* Add your styles here */
  margin-right: 20px;
`;

const Footer = ({ onThemeChange, onLanguageChange }) => {
  return (
    <StyledFooter>
      <FooterContent>
        <p>&copy; 2024 Your Website</p>
        <FooterSettings>
          <SettingsList>
            <SettingsItem>
              <label>Theme</label>
              <ThemeSelector onChange={onThemeChange} />
            </SettingsItem>
            <SettingsItem>
              <label>Language</label>
              <LanguageSelector onChange={onLanguageChange} />
            </SettingsItem>
          </SettingsList>
        </FooterSettings>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
