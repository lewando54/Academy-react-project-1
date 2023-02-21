import React, { useRef } from 'react'
import LoginTemplate from '../../components/templates/LoginTemplate/LoginTemplate'

function LoginPage (): React.ReactElement {
  const loginRef = useRef<any>(null)

  const handleLoginSubmit = (): void => {
    // Make request to backend
    console.log('Login:')
    console.log(loginRef.current.email.value)
    console.log(loginRef.current.password.value)
    console.log(loginRef.current.rememberMe.checked)
    console.log('---------------')
  }

  return (
    <LoginTemplate ref={loginRef} onSubmit={handleLoginSubmit}/>
  )
}

export default LoginPage
