import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Button from '../../atoms/Button/Button'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import Or from '../../atoms/Divider/Divider'
import SocialButtonList from '../../molecules/SocialButtonList/SocialButtonList'
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel/CheckboxWithLabel'
import FormContainer from './LoginForm.style'
import Heading from '../../atoms/Heading/Heading.style'
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

function Form (props: any, ref: any): React.ReactElement {
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const rememberMeCheckboxRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      emailInputRef: emailInputRef.current,
      passwordInputRef: passwordInputRef.current,
      rememberMeCheckboxRef: rememberMeCheckboxRef.current
    }
  }, [emailInputRef, passwordInputRef, rememberMeCheckboxRef])
  // use ref
  // ForwardRef
  // use imperative handle

  // przepisać tutaj onInputChange ()=>
  // Dodać ESLint - .eslintrc.js
  // <Input type="password" id="password" name="Password" onInputChange={onInputChange}/>

  // inputwlabel -> ref zrobić ref nie na dolnym elemencie -> forwardRef, useImperativeHandle

  return (
        <FormContainer>
            <Heading level={level}>Login</Heading>
            <InputWithLabel ref={emailInputRef} type="email" id="email" name="Email" required>Email</InputWithLabel>
            <InputWithLabel ref={passwordInputRef} type="password" id="password" name="Password" required>Password</InputWithLabel>
            <CheckboxWithLabel ref={rememberMeCheckboxRef} id="remember" name="Remember">Remember me?</CheckboxWithLabel>
            <Button color={'primary'} onClick={props.onSubmit}>Login</Button>
            <ForgotPasswordElement>Forgot password?</ForgotPasswordElement>
            <Or text='OR'/>
            <SocialButtonList />
            <TextWithLink pText={'Need an account?'} href={'/register'} anchorText={'SIGN UP'}/>
        </FormContainer>
  )
}

export default forwardRef(Form)
