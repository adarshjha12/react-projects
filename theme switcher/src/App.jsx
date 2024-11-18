
import './App.css'
import Card from './components/Card'
import Toggle from './components/Toggle'
import ThemeContextProvider from './context/ThemeContextProvider'


function App() {

  return (
    <ThemeContextProvider>
        <Toggle />
        <Card />
    </ThemeContextProvider>
  )
}

export default App
