import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentUser} from './services/authServices'
import {login, logOut} from './store/authSlice'
import {Header, Footer, LogoutBtn} from './components/index'
import {Outlet} from 'react-router-dom'


function App() {

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch()
   const data = useSelector( state => state.auth.userData)
   console.log('store data', data);
  

  useEffect( () =>{

    getCurrentUser()
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

  return loading ? (
     <div className='text-white'>loading....</div>
  ) : (
    <div className='w-full '>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App

