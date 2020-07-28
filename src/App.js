import React, {useState, useEffect} from 'react';
import Global from './styles/Global'
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from './Components/Theme'
import Router from './routes'

import Header from './Components/Header/index'



const  App = () => {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
       <Global />
        <Header  themeToggler={themeToggler} />
       <Router />
    </>
    </ThemeProvider>
  );
}

export default App;
