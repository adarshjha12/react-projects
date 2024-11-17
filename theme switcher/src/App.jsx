import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Toggle from './components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle />
      <Card />
    </>
  )
}

export default App
