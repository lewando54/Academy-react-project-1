import React from 'react'
import RegisterPage from './pages/Register/RegisterPage'
import LoginPage from './pages/Login/LoginPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App (): React.ReactElement {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/register' />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

// Przerobić komponenty na atomic design
// /Atoms /Molecules /Organisms /Templates
// /Screens - Podstrony (nie w components)
