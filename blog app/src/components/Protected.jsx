import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

function Protected({children, authentication = true}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const authStatus = useSelector(state => state.auth.status)

  useEffect( () => {
    const handleNavigation = () =>{
      if (authentication !== authStatus) {
        const targetRoute = authentication ? '/' : '/login'

        if (window.location.pathname !== targetRoute) {
          navigate(targetRoute)
        }
      }
      setLoading(false)
    }
    handleNavigation()
  }, [authStatus, navigate, authentication])
  


  return (
    <div>
      {loading ? <h1>loading...</h1> : <> {children} </>}
    </div>
  )
}

export default Protected