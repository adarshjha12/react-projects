import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth_service'
import {login, logOut} from './store/authSlice'

function App() {

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch()
  
  useEffect( () =>{
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData))
      } else{
        dispatch(logOut())
      }
    })
    .catch((err) => console.log(err))
    .finally(setloading(false))
  }, [])

  !loading ? (
    <div> </div>
  ) : ()
}

export default App
