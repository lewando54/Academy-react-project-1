import React from 'react'
import RegisterPage from './pages/Register/RegisterPage'
import LoginPage from './pages/Login/LoginPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Napisz testy! Każdy folder plik z testem
// Testujemy działanie tylko względem poziomu aktualnego
// Jest, React testing library
// Page nie muszę

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
