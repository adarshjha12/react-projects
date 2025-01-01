import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
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
        element: 
          <HomePage/>
      },
      {
        path: '/login',
        element: <Protected authentication={false}>
          <LoginPage/>
        </Protected>
      },
      {
        path: '/signup',
        element: <Protected authentication={false}>
          <SignupPage/>
        </Protected>
      },
      {
        path: '/all-post',
        element: <Protected authentication={true}>
          <AllPostPage/>
        </Protected>
      },
      {
        path: '/add-post',
        element: <Protected authentication={true}>
          <AddPost/>
        </Protected>
      },

      {
        path: '/edit-post/:slug',
        element: <Protected authentication={true}>
          <EditPostPage/>
        </Protected>
      },
      {
        path: '/post/:slug',
        element: <Protected authentication={true}>
          <Post/>
        </Protected>
      },
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
