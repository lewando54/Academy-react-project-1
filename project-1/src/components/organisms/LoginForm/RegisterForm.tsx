import React, { useRef } from 'react'
import Button from '../../atoms/Button/Button'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import Or from '../../atoms/DividerWithText/DividerWithText'
import SocialButtonList from '../../molecules/SocialButtonList/SocialButtonList'
import FormContainer from './FormContainer.style'
import FormTitle from '../../atoms/TitleHeading/TitleHeading.style'
import TextWithLink from '../../atoms/TextWithLink/TextWithLink'

function RegisterForm (): React.ReactElement {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleRegisterSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    // Make request to backend
    console.log('Register:')
    console.log(emailInputRef.current?.value)
    console.log(passwordInputRef.current?.value)
    console.log('---------------')
  }

  return (
        <FormContainer>
            <FormTitle>Sign up</FormTitle>
            <InputWithLabel innerRef={emailInputRef} type="email" id="email" name="Email" required>Email</InputWithLabel>
            <InputWithLabel innerRef={passwordInputRef} type="password" id="password" name="Password" required>Password</InputWithLabel>
            <Button color="primary" onClick={handleRegisterSubmit}>Sign up</Button>
            <Or text='OR'/>
            <SocialButtonList />
            <TextWithLink pText={'Already a user?'} href={'/login'} anchorText={'SIGN UP'}/>
        </FormContainer>
  )
}

export default RegisterForm
