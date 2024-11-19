import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Toggle from './components/Toggle'
import ThemeContextProvider from './context/ThemeContextProvider'

function App() {

  const [currentTheme, setCurrentTheme] = useState('light')
  const lightTheme = () => setCurrentTheme('light');
  const darkTheme = () => setCurrentTheme('dark');

  useEffect( () => {
      const html = document.querySelector('html')
      html.classList.remove('light', 'dark')
      html.classList.add(currentTheme)
      console.log(currentTheme);
      
  }, [currentTheme])

  return (
    <ThemeContextProvider value={{setCurrentTheme,currentTheme, lightTheme, darkTheme}}>
      <Toggle />
      <div className='bg-white border-2 rounded-2xl text-black dark:bg-black dark:text-white'>
      <Card />
      </div>
    </ThemeContextProvider>

  )
}

export default App