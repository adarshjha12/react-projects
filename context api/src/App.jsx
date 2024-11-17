import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <div className='p-4 border-2 rounded-md'>
        <h1 className='text-white mb-3'>hello user</h1>
        <Login />
        <Profile />
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
