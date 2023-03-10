import React, { useRef } from 'react'
import PageWrapper from '../../components/templates/PageWrapperTemplate/PageWrapper.style'
import RegisterTemplate from '../../components/templates/RegisterTemplate/RegisterTemplate'

function RegisterPage (): React.ReactElement {
  const registerRef = useRef<any>(null)

  const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    // Make request to backend
    console.log('Register:')
    console.log(registerRef.current.email.value)
    console.log(registerRef.current.password.value)
    console.log('---------------')
  }

  return (
        <PageWrapper>
            <RegisterTemplate ref={registerRef} onSubmit={handleRegisterSubmit}/>
        </PageWrapper>
  )
}

export default RegisterPage
