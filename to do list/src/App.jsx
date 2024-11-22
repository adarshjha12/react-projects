import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/ToDoContext'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  
  const addTodo = (todo) => {
    setTodos((prev) => {[{id: Date.now(), ...todo}, ...prev]})
  }

  const updateTodo = (id, todo) => {
    
  }
  const deleteTodo = (id) => {

  }

  const toggleComplete = ''




  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className='bg-blue-500 p-4 border-2 rounded-full'>team india win</h1>
      <AddTodo/>
    </TodoProvider>
  )
}

export default App
