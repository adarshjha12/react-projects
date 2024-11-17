import {React, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

  if (!user) {
    return <div className='text-white'>Please enter your credentials</div>
  }

  return <div className='text-white'>welcome {user.username}</div>
}

export default Profile