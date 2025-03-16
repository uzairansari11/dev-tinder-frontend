// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ThemeContext = createContext();

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  // Check user's preference or stored theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update document with theme changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Apply theme attribute to html element - DaisyUI will use this
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
