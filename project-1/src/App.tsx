import './App.css'
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// React router! Styled components
function App() {
  return (
    <div className='w-full h-full flex place-items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/register' />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
