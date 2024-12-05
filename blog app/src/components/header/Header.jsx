import React from 'react'
import {useSelector} from 'react-redux'
import {Container, LogoutBtn, Logo} from '../index'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {

  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      url: '/',
      active: true
    },
    {
      name: 'Login',
      url: '/login',
      active: !authStatus

    },
    {
      name: 'Sign up',
      url: '/signup',
      active: !authStatus

    },
    {
      name: 'All-posts',
      url: '/all-posts',
      active: authStatus

    },
    {
      name: 'Add-posts',
      url: '/add-posts',
      active: authStatus

    }
  ]
  return (
    <div className='text-white pt-4 mx-6 '>
      <Container>
        <nav className='flex justify-between'>
         <div>
            <Link 
              className='flex items-center text-xl font-bold' 
              to='/'>
              <span className='mr-2'>
                <img src="/images/icon.svg" width={50} alt="" />
              </span>
              BlogBase.
              <b className='text-red-500'>com</b>
            </Link>
          </div>
          <ul className='flex items-center'>
              {navItems.map((items) => 
                items.active ? (
                  <li key={items.name}>
                    <button
                    onClick={() => navigate(items.url)}
                     className='px-3 py-0 hover:text-white hover:bg-red-700 text-red-500 border rounded-full font-bold mr-2'>{items.name}</button>
                  </li>
                ) : 
                    null
              )}
              {
                authStatus && (
                  <li>
                    <LogoutBtn/>
                  </li>
                )
              }

          </ul>

        </nav>
      </Container>
    </div>
  )
}

export default Header