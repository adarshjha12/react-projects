import React, { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext'

function TodoForm() {


  return (
    <div className='text-white mt-4'>
        <form action="" >
            <div>Todo List App</div>
            <div className='p-4 rounded-md border-8 border-gray-500 mt-3'>
                <input 
                 type="text" className='pr-20 rounded-md outline-none pl-2 mr-6 text-black' name="" id="" />
                <button className='font-bold px-3 py-1 rounded-md bg-green-500'>Add Todo</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm