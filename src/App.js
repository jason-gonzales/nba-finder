import React, { useState } from 'react';
import './App.css';
// import LogoutButton from './LogoutButton';
// import Profile from './Profile';
// import { useAuth0 } from '@auth0/auth0-react';
import Home from './Home';
import Demo from './Demo';
import Layout from './Layout';
import ThemeContext, {themes} from './theme-context';

export default function App() {

  const [view, setView] = useState('')
  const [theme, setTheme] = useState(themes.dark)

  const changeView = (name) => {
    setView({ name })
  }

  const toggleTheme = () =>
  theme === themes.dark
  ? setTheme(themes.light)
   : setTheme(themes.dark);
  // const { isLoading } = useAuth0();
  // if (isLoading) return <div>Loading...</div>

  let page = null;
  if (view.name === "demo") {
    page =
    <ThemeContext.Provider value={theme}>
      <Demo changeView={changeView} />
    </ThemeContext.Provider>

  } else {
    page = <Home changeView={changeView} />
  }

  return (
    <>
      {page}
      {/* <Profile />
      <LogoutButton /> */}
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Change Theme</button>
        <Layout />
      </ThemeContext.Provider>

    </>
  )
}
