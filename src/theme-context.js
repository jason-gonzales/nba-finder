import React from 'react';

export const themes = {
  home: {
    color: "black",
    background: "#1d428a",
  },
  away: {
    color : "white",
    background: "black"
  }
};
console.log(themes.dark)
const ThemeContext = React.createContext(themes.home)

export default ThemeContext;
