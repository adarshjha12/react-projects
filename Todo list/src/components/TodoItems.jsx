import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItems({todo}) {
  const [isEditable, setisEditable] = useState(false);
  const [todoMsg, settodoMsg] = useState(todo.todoText);
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todoText: todoMsg})
    setisEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className={`flex justify-between w-full border rounded-md mt-4 px-6 py-2 ${todo.completed ? 'bg-green-300' : 'bg-purple-300'}`}>
          <div>
              <input type="checkbox" checked={todo.completed} 
             onChange={toggleCompleted} className='mr-4'  name="" id="" />
              <input
              type="text"
              value={todoMsg}
              onChange={(e) => settodoMsg(e.target.value)}
              // readOnly={!isEditable}
              className={`${isEditable ? 'border-black/70 px-2' : 'border-transparent'}
              ${todo.completed ? 'line-through' : ''}
              border mr-4 text-black font-bold border-none outline-none bg-transparent`} name="" id="" />
          </div>
          <div>
              <button className='mr-2 rounded-md bg-gray-600 border' onClick={() => {
                if(todo.completed) return
                
                if(isEditable){
                  editTodo()
                } else{
                  setisEditable((prev) => !prev)
                }
              }} 
              disabled={todo.completed}
              type='button'>{isEditable ? '🗃️' : '🖊️'}</button>
              <button
              className='rounded-md bg-gray-600 border' 
               type='button' onClick={() => deleteTodo(todo.id)}>❌</button>
          </div>
    </div>

  )
}

export default TodoItems