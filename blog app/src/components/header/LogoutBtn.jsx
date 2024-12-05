import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice'
import authService from '../../appwrite/auth_service'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout()
        .then(() => (dispatch(logOut())))
        .catch((err) => console.log(err)
        )
    }

  return (
    <button className='border hover:bg-blue-600 text-white rounded-md px-3 bg-red-600 font-semibold py-1'>
        Logout
    </button>
  )
}

export default LogoutBtn