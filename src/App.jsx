import { useState } from 'react'
import { Route, Routes, Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Login from './components/auth/Login'
import Registar from './components/auth/Registar'
import Home from './components/Home'

function App() {

  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registar' element={<Registar/>}/>
      </Routes>
      <Outlet/>
    </div>
  )
}

export default App
