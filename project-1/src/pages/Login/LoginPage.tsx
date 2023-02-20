import React, { useRef } from 'react'
import LoginTemplate from '../../components/templates/LoginTemplate/LoginTemplate'

// Pages - powinien zawierać logikę, a nie style

function LoginPage (): React.ReactElement {
  const loginRef = useRef<any>()

  const handleLoginSubmit = (): void => {
    // Make request to backend
    console.log('Login:')
    console.log(loginRef.current?.emailInputRef.value)
    console.log(loginRef.current?.passwordInputRef.value)
    console.log(loginRef.current?.rememberMeCheckboxRef.checked)
    console.log('---------------')
  }

  return (
    <LoginTemplate ref={loginRef} onSubmit={handleLoginSubmit}/>
  )
}

export default LoginPage
