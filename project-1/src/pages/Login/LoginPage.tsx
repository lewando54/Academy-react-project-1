import React, { useRef } from 'react'
import LoginTemplate from '../../components/templates/LoginTemplate/LoginTemplate'
import { TSocialsArray } from '../../components/molecules/SocialButtonList/SocialButtonList'
// po kliknięciu submit w login -> inputy się czyszczą -> focus ustawiamy na pierwszy input od góry
// Dodanie storybook'a do projektu -> Do każdego komp. story -> Nazwy: Atoms/Input #! Pages nie do storybook'a | jeżeli potrzebne, dodaj knobs

interface ILoginFormRef {
  email: HTMLInputElement
  password: HTMLInputElement
  rememberMe: HTMLInputElement
  focus: () => void
}

function LoginPage (): React.ReactElement {
  const loginRef = useRef<ILoginFormRef>(null)

  const socials: TSocialsArray = [
    { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
    { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
    { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
  ]

  const handleLoginSubmit = (): void => {
    // Make request to backend
    console.log('Login:')
    console.log(loginRef.current?.email.value)
    console.log(loginRef.current?.password.value)
    console.log(loginRef.current?.rememberMe.checked)
    console.log('---------------')
    loginRef.current?.focus()
  }

  return (
    <LoginTemplate ref={loginRef} onSubmit={handleLoginSubmit} socials={socials}/>
  )
}

export default LoginPage
