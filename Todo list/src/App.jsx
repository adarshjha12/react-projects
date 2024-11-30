import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { TodoProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos( (prev) => [{...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos( (prev) => (prev.filter((todo) => todo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos( (prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  

  useEffect(() => {
  
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []);
  
  useEffect(() => {
  
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='w-fit'>
        <TodoForm/>
        {todos.map( (todo) => (
          <div key={todo.id}>
              <TodoItems todo={todo}/>
          </div>
        ))}
      </div>
    </TodoProvider>
  )
}

export default App
