import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {

  const [todo, setTodo] = useState('')
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({todoText:todo, completed: false, id: Date.now()})
    setTodo('')
  }  

  return (
    <div className='text-white mt-4'>
        <form action="" onSubmit={add}>
            <div>Todo List App</div>
            <div className='p-4 flex rounded-md border-8 border-gray-500 mt-3'>
                <textarea value={todo} onChange={(e) => setTodo(e.target.value)} 
                 type="text" className='pr-20 h-10 rounded-md outline-none pl-2 mr-6 text-black' name="" id="" />
                <button type='submit' className='font-bold px-3 h-10 py-1 rounded-md bg-green-500'>Add Todo</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm