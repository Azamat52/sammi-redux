import { useEffect, useState } from 'react'
import { Route, Routes, Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Login from './components/auth/Login'
import Registar from './components/auth/Registar'
import Home from './components/Home'
import CreateArticle from './components/CreateArticle'
import Authintification from './services/Authintification'
import { useDispatch } from 'react-redux'
import { succesLogin } from './slice/auth-slice'
import { getItem } from './services/LocalStorage'
import EditArticle from './components/EditArticle'
function App() {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await Authintification.GetUser()
      dispatch(succesLogin(response.user))
    } catch (error) {
      console.log("Error getting user info");
    }
  }
  useEffect(() => {
    const token = getItem("token")
    if (token) {
      getUser()
    }
  }, [])

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create' element={<CreateArticle />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registar' element={<Registar />} />
        <Route path='/edit/:slug' element={<EditArticle />} />
      </Routes>/
      <Outlet />
    </div>
  )
}

export default App
