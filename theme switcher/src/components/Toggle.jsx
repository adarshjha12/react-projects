import {React, useContext, useState} from 'react'
import ThemeContext from '../context/ThemeContext'

function Toggle() {
    const {setTheme} = useContext(ThemeContext)

    const themeHandler = () => {
        setTheme('dark')
    }

  return (
    <div className='mb-4 flex justify-start'>
        <p className='mr-4'>Change Theme</p>
        <div className='border rounded-2xl w-14'>
            <div onClick={themeHandler} className='w-6 h-6 bg-blue-600 rounded-full '></div>
        </div>
    </div>
  )
}

export default Toggle