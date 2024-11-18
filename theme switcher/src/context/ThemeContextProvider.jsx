import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeContextProvider({children}) {
    const [currentTheme, setTheme] = useState('')

  return (
    <ThemeContext.Provider value={{currentTheme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider