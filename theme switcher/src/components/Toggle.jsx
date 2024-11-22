import React, { useState } from 'react'
import ThemeContext from '../context/Theme'
import { useContext, useEffect } from 'react'

function Toggle() {
  const { setCurrentTheme, darkTheme, lightTheme} = useContext(ThemeContext)

  const [isToggled, setIsToggeled] = useState(false)


  useEffect(() => {
    if (isToggled) {
      darkTheme();
      setCurrentTheme('dark');
    } else {
      lightTheme();
      setCurrentTheme('light');
    }
  }, [isToggled, darkTheme, lightTheme, setCurrentTheme]);

  const clickHandler = () => {
    setIsToggeled((prev) => !prev);
  };


  return (
    <div className='flex gap-3 mb-5'>
          <span>Click To Enable {isToggled ? "light" : "dark"} theme</span>
          <div onClick={clickHandler}  className={`h-5 w-10  border-2 rounded-2xl flex items-center ${isToggled ? 'scale-90' : 'scale-100'}`}>
            <div className={`h-4 w-4 border-2 transition-all ease-linear duration-400  rounded-full ${isToggled ? 'translate-x-5' : 'translate-x-0'} ${isToggled ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
          </div>
    </div>
  )
}

export default Toggle