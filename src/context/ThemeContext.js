

import React, { createContext, useState, useContext } from 'react';
import './Theme.css'; 


export const ThemeContext = createContext();


export const useTheme = () => {
  return useContext(ThemeContext);
};


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
