import React, { useState } from 'react'

function TodoItems({todo}) {

  return (
    <div className={`flex justify-between w-full border rounded-md mt-4 px-6 py-2 `}>
          <div>
              <input type="checkbox" className='mr-4'  name="" id="" />
              <input type="text"  className='mr-4 text-white border-none outline-none bg-transparent' name="" id="" />
          </div>
          <div>
              <button type='button'>🖊️</button>
              <button type='button'>❌</button>
          </div>
    </div>
  )
}

export default TodoItems