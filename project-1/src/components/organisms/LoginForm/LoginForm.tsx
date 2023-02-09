import React, { useRef } from 'react'
import Button from '../../atoms/Button/Button'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import Or from '../../atoms/DividerWithText/DividerWithText'
import SocialButtonList from '../../molecules/SocialButtonList/SocialButtonList'
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel/CheckboxWithLabel'
import FormContainer from './FormContainer.style'
import FormTitle from '../../atoms/TitleHeading/TitleHeading.style'
import styled from 'styled-components'
import TextWithLink from '../../atoms/TextWithLink/TextWithLink'

const ForgotPasswordElement = styled.a`
    width: 100%;
    font-size: 0.9rem;
    color: #aaa;
    margin-top: -0.5rem;
    text-align: right;
    cursor: pointer;
`

function Form (): React.ReactElement {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const rememberMeCheckboxRef = useRef<HTMLInputElement>(null)
  // use ref
  // ForwardRef
  // use imperative handle

  const handleLoginSubmit = (): void => {
    // Make request to backend
    console.log('Login:')
    console.log(emailInputRef.current?.value)
    console.log(passwordInputRef.current?.value)
    console.log(rememberMeCheckboxRef.current?.checked)
    console.log('---------------')
  }

  // przepisać tutaj onInputChange ()=>
  // Dodać ESLint - .eslintrc.js
  // <Input type="password" id="password" name="Password" onInputChange={onInputChange}/>

  return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <InputWithLabel innerRef={emailInputRef} type="email" id="email" name="Email" required>Email</InputWithLabel>
            <InputWithLabel innerRef={passwordInputRef} type="password" id="password" name="Password" required>Password</InputWithLabel>
            <CheckboxWithLabel innerRef={rememberMeCheckboxRef} id="remember" name="Remember">Remember me?</CheckboxWithLabel>
            <Button color={'primary'} onClick={handleLoginSubmit}>Login</Button>
            <ForgotPasswordElement>Forgot password?</ForgotPasswordElement>
            <Or text='OR'/>
            <SocialButtonList />
            <TextWithLink pText={'Need an account?'} href={'/register'} anchorText={'SIGN UP'}/>
        </FormContainer>
  )
}

export default Form
