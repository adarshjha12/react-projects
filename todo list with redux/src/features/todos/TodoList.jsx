import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, updateTodo, deleteTodo} from '../todoSlice'

function TodoList() {

  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [isEditing, setIsEditing] = useState(null);
  const [editTodo, setEditTodo] = useState('')
  
  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(newTodo))
    setNewTodo('')
  }

  const handleEditTodo = (id, text) =>{
    setIsEditing(id)
    setEditTodo(text)
  }

  const handleSaveTodo = (id) => {
    dispatch(updateTodo({id, text: editTodo}))
    setIsEditing(null)
  }

  const handleCancel = () => {
    setIsEditing(null)
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-8'>
          <form action="" onSubmit={handleAddTodo}>
            <input 
            type="text"     
            placeholder='type todo here'   
            autoFocus    
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className='pl-2 py-1 border-one outline-none mr-4 pr-10 rounded-md w-[400px]'/>

            <button 
            type="submit" 
            className='bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-800 font-bold '>
            <span className='font-extrabold'>+</span> Create Todo
            </button>

          </form>
      </div>
      <ul className='w-full flex flex-col justify-center items-center'>
        {todos.map(todo => (
          <li key={todo.id} className='flex w-full justify-center mb-2'>
              {isEditing === todo.id ? (
                <>
                  <div className='flex py-1 w-full justify-between '>
                      <div className='text-xl'>
                        <input
                         type="text" 
                         autoFocus                       
                         className='px-6 text-black font-semibold rounded-full bg-yellow-200 outline-none border-none'
                         value={editTodo}
                         onChange={(e) => setEditTodo(e.target.value)}
                          name=""
                           id="" />
                      </div>
                      <div className='flex gap-4 text-white'>

                        <button 
                        onClick={() => handleSaveTodo(todo.id)}
                        type='button'
                         className='bg-blue-700 font-bold  text-xs px-2 rounded-sm'>Save
                        </button>

                        <button 
                        type='button' 
                        onClick={() => handleCancel()}
                        className='bg-red-700 text-xs font-bold px-2 rounded-sm' >Cancel</button>
                      </div>
                  </div>
                </>
                ) : (
                  <>
                    <div className='flex  py-1 rounded-full w-full justify-between text-white gap-2 '>
                       <div className='bg-yellow-500 border border-black rounded-sm w-full flex justify-start px-2'>
                          <span className='text-black'>{todo.text}</span>
                       </div>
                       <div className='flex gap-4'>
                          <button 
                          onClick={() => handleEditTodo(todo.id, todo.text)}
                          className='bg-blue-700 font-bold  text-xs px-2 rounded-sm'
                          type='button'>Edit</button>

                          <button
                          onClick={() => handleDeleteTodo(todo.id)}
                           className='bg-red-700 text-xs font-bold px-2 rounded-sm' type='button'>Delete</button>
                       </div>
                    </div>
                  </>
                  )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList