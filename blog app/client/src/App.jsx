// import { useEffect, useState } from 'react'
// import './App.css'
// import {useDispatch} from 'react-redux'
// import authService from './appwrite/auth_service'
// import {login, logOut} from './store/authSlice'
// import {Header, Footer, LogoutBtn} from './components/index'
// import {Outlet} from 'react-router-dom'


// function App() {

//   const [loading, setloading] = useState(true);
//   const dispatch = useDispatch()
  
//   useEffect( () =>{
//     authService.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login(userData))
//       } else{
//         dispatch(logOut())
//       }
//     })
//     .catch((err) => console.log(err))
//     .finally(setloading(false))
//   }, [])

//   return !loading ? (
//      <div className='text-white'>loading....</div>
//   ) : (
//     <div className='w-full '>
//       <Header/>
//         <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

//-------------------------------------------------------------------------/////

import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {getCurrentUser, loginService, signupService} from './services/authServices'
import {login, logOut} from './store/authSlice'
import {Header, Footer, LogoutBtn} from './components/index'
import {Outlet} from 'react-router-dom'


function App() {

  const [loading, setloading] = useState(false);

    
   

useEffect(() => {
  signupService({ title: 'User', email: 'abcdefghij@example.com', password: '123456' })
    .then((data) => console.log('Signup Success:', data))
    .catch((err) => console.log('Signup Failed:', err));

    loginService({ email: 'abcdefghij@example.com', password: '123456' })
    .then((data) => console.log('Login Success:', data))
    .catch((err) => console.log('Login Failed:', err));

    getCurrentUser()
    .then((data) => console.log('Current User:', data))
    .catch((err) => console.log('Error Fetching Current User:', err));

  
}, []);

    
    getCurrentUser()
    .then((data) => console.log('Current User:', data))
    .catch((err) => console.log('Error Fetching Current User:', err));

  
  // const dispatch = useDispatch()
  
  // useEffect( () =>{
  //   getCurrentUser()
  //   .then((userData) => {
  //     if (userData) {
  //       dispatch(login(userData))
  //     } else{
  //       dispatch(logOut())
  //     }
  //   })
  //   .catch((err) => console.log(err))
  //   .finally(setloading(false))
  // }, [])

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
