import React, { useState , useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = () =>{
        setUser({username, password})
    }

  return (
    <div className='  text-white items-center'>
        <form action="" onSubmit={(e) => e.preventDefault()}>  
            <div className='mb-2'>
                <label htmlFor="username" className='mr-2'>username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="" id="" placeholder= 'enter username' className='rounded-md px-2 text-black' />

            </div>
            <div>
                <label htmlFor="password" className='mr-2 '>password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder= 'enter password' name="" id="" className='rounded-md px-2 text-black'/>
            </div>
            <button onClick={handleSubmit} type='submit' className='mt-4 px-4 py-1 border-2 rounded-md bg-orange-400 text-black font-extrabold' >submit</button>
        </form>
    </div>
  )
}

export default Login