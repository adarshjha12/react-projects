import React from 'react'

function Toggle() {
    const className = 'translate-x-8'
  return (
    <div className='mb-4 flex justify-start'>
        <p className='mr-4'>Change Theme</p>
        <div className='border rounded-2xl w-14'>
            <div onClick={className} className='w-6 h-6 bg-blue-600 rounded-full '></div>
        </div>
    </div>
  )
}

export default Toggle