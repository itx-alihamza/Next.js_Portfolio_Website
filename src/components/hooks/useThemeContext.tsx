import React, { createContext, useState, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Theme Provider Component
export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for using Theme Context
export const useTheme = () => useContext(ThemeContext);
