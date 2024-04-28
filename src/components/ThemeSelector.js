import React from 'react';

const ThemeSelector = ({ selectedTheme, onChange }) => {
  const handleThemeChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select value={selectedTheme} onChange={handleThemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeSelector;
