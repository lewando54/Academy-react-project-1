import React, { useRef } from 'react'
import PageWrapper from '../../components/templates/PageWrapperTemplate/PageWrapper.style'
import RegisterTemplate from '../../components/templates/RegisterTemplate/RegisterTemplate'
import { TSocialsArray } from '../../components/molecules/SocialButtonList/SocialButtonList'

interface IRegisterFormRef {
  email: HTMLInputElement
  password: HTMLInputElement
  focus: () => void
}

function RegisterPage (): React.ReactElement {
  const registerRef = useRef<IRegisterFormRef>(null)

  const socials: TSocialsArray = [
    { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
    { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
    { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
  ]

  const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    // Make request to backend
    console.log('Register:')
    console.log(registerRef.current?.email.value)
    console.log(registerRef.current?.password.value)
    console.log('---------------')
    registerRef.current?.focus()
  }

  return (
        <PageWrapper>
            <RegisterTemplate ref={registerRef} onSubmit={handleRegisterSubmit} socials={socials}/>
        </PageWrapper>
  )
}

export default RegisterPage
