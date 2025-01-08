import React, {useState} from 'react'
import { Button, InputField } from './index'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login as authLogin} from '../store/authSlice'
import authService from '../appwrite/auth_service'

function LoginComponent() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errorState, setErrorState] = useState('')
    const {register, handleSubmit} = useForm()

    const loginFunction = async (data) =>{
        setErrorState('')
        try {
            const session = authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()

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
    <div className='w-full'>
        <div>
            <h2>login here please....</h2>
        </div>
        
        <div>
            <p>don't have an account?</p>
            <Link 
            to={'/signup'}
            className='px-2 bg-blue-500 text-white rounded-lg'
            >
                sign up now
            </Link>
        </div>
        <div>
            {errorState && <p>
                {errorState}
            </p> }
        </div>
        <div>
            <form onSubmit={handleSubmit(loginFunction)}>
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
                    label = "Password:"
                    type = 'password'
                    placeholder = 'enter your password'
                    {...register('password', {
                        required: true
                    })}
                />

                <Button type='submit'> sign in</Button>
            </form>
        </div>
    </div>
  )
}

export default LoginComponent