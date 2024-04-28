import React, { useState } from 'react';

const Settings = () => {
  // State variables for settings
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    push: false,
    sms: false,
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  // Function to handle changes in notification preferences
  const handleNotificationChange = (event) => {
    const { name, checked } = event.target;
    setNotificationPreferences({ ...notificationPreferences, [name]: checked });
  };

  // Function to handle theme change
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Function to save settings (could be sent to backend)
  const saveSettings = () => {
    // Implement logic to save settings
    console.log('Settings saved:', { notificationPreferences, theme, language });
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="notification-preferences">
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={notificationPreferences.email}
            onChange={handleNotificationChange}
          />
          Email
        </label>
        <label>
          <input
            type="checkbox"
            name="push"
            checked={notificationPreferences.push}
            onChange={handleNotificationChange}
          />
          Push Notification
        </label>
        <label>
          <input
            type="checkbox"
            name="sms"
            checked={notificationPreferences.sms}
            onChange={handleNotificationChange}
          />
          SMS
        </label>
      </div>
      <div className="theme-selection">
        <h3>Theme Selection</h3>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="language-selection">
        <h3>Language</h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
};

export default Settings;
