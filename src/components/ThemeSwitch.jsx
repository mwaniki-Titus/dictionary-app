import React from 'react';

const ThemeSwitch = ({ onThemeChange }) => {
  return (
    <footer>
      <button onClick={() => onThemeChange('serif')}>Serif</button>
      <button onClick={() => onThemeChange('sans-serif')}>Sans Serif</button>
      <button onClick={() => onThemeChange('monospace')}>Monospace</button>
    </footer>
  );
};

export default ThemeSwitch;
