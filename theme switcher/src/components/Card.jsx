import {React, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Card() {

  const {currentTheme} = useContext(ThemeContext)
  

  return (
    <div className='border-2 rounded-md p-4'>
        <div className='flex justify-center mb-4'>
            <img className='w-20 bg-gray-500 p-3 rounded-md' src="/images/bat.png" alt="" />
        </div>
        <div className='text-left text-sm'>
            <h1 className='font-extrabold'>Gray Nicholls Cricket Bat</h1>
            <p>Deliver to: <span>Bengaluru</span></p>
            <p >Price: <span className='text-green-400'>23,999 INR </span><del className='text-red-500'>47,879 INR</del></p>
            <div className='text-center'>
            <button className='border rounded-md mt-2 px-4 bg-blue-600 text-white font-extrabold ' type='button'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card