import React, {useState} from 'react'
import authService from '../appwrite/auth_service'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import {InputField, Button} from './index'
import { set, useForm } from 'react-hook-form'

function SignupComponent() {

  const [errorState, setErrorState] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const signupUser = (data) =>{
    setErrorState('')

    try {
      const newUser = authService.createAccount(data)

      if (newUser) {
        const userData = authService.getCurrentUser()

        if (userData) {
          dispatch(authLogin(userData))
          navigate('/')
        }
      }
    } catch (error) {
      setErrorState(error)
    }
  }

  return (
    <div>
      <div>
        <p>already have an account?</p>
        <Link 
        to={'/login'}
        className='px-2 bg-blue-500 text-white rounded-lg'

        >
          Login now
        </Link>
      </div>
      <div>
        {errorState && <p className='text-red-500'>
          {errorState}
        </p>
        }
      </div>
      <div>
        <form onSubmit={handleSubmit(signupUser)} >
          <InputField 
            label = 'Name:'
            type = 'text'
            placeholder = 'enter your name'
            {...register('name', {
              required: true
            })}
          />

          <InputField
              label='Email:'
              placeholder='enter your email'
              type= 'email'
              {...register('email', {
                  required: true,
                  validate: {
                      matchPattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'email must be valid'

                  }
              })}
           />
           <InputField
            label= 'Password:'
            type = 'password'
            placeholder = 'enter your password'
            {...register('password', {
              required: true
            })}
           />

           <Button type='submit'>Create Account</Button>
                
        </form>
      </div>
    </div>
  )
}

export default SignupComponent