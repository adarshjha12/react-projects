import React from 'react'

function AddTodo() {
  return (
    <div className='text-white mt-4'>
        <div>Todo List App</div>
        <div className='p-4 rounded-md border mt-3'>
            <input type="text" className='pr-20 pl-2 mr-6 text-black' name="" id="" />
            <button className='font-bold px-3 py-1 rounded-md bg-green-500'>Add Todo</button>
        </div>
    </div>
  )
}

export default AddTodo