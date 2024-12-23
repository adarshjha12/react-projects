import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPostPage from './pages/AllPostPage.jsx'
import EditPostPage from './pages/EditPostPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Post from './pages/Post.jsx'
import SignupPage from './pages/SignupPage.jsx'
import {Protected} from './components/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
     children: [
      {
        path: '/',
        element: <Protected authentication>
          <HomePage/>
        </Protected>
      },
      {
        path: '/login',
        element: <Protected authentication={false}>
          <LoginPage/>
        </Protected>
      },
      {
        path: '/signup',
        element: <Protected>
          <SignupPage/>
        </Protected>
      },
      {
        path: '/all-post',
        element: <Protected>
          <AllPostPage/>
        </Protected>
      },
      {
        path: '/add-post',
        element: <Protected>
          <AddPost/>
        </Protected>
      },
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
