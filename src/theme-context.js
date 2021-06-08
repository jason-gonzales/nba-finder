import React from 'react';

export const themes = {
  home: {
    color: "white",
    background: "#1d428a",
  },
  away: {
    color : "white",
    background: "black"
  }
};
const ThemeContext = React.createContext(themes.home)

export default ThemeContext;
