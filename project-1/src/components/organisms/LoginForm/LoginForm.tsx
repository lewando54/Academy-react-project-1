import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Button from '../../atoms/Button/Button'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import Divider from '../../atoms/Divider/Divider'
import SocialButtonList, { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import CheckboxWithLabel from '../../molecules/CheckboxWithLabel/CheckboxWithLabel'
import FormContainer from './LoginForm.style'
import Heading from '../../atoms/Heading/Heading'
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

export interface ILoginProps {
  socials: TSocialsArray
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void
}

export interface ILoginRef {
  email: HTMLInputElement | null
  password: HTMLInputElement | null
  rememberMe: HTMLInputElement | null
}

function Form (props: ILoginProps, ref: React.Ref<ILoginRef>): React.ReactElement {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const rememberMeCheckboxRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      email: emailInputRef.current,
      password: passwordInputRef.current,
      rememberMe: rememberMeCheckboxRef.current,
      focus () {
        if (emailInputRef.current != null &&
          passwordInputRef.current != null &&
          rememberMeCheckboxRef.current != null) {
          emailInputRef.current.value = ''
          passwordInputRef.current.value = ''
          rememberMeCheckboxRef.current.checked = false
          emailInputRef.current.focus()
        }
      }
    }
  }, [])

  return (
        <FormContainer>
            <Heading>Login</Heading>
            <InputWithLabel ref={emailInputRef} type="email" id="email" name="Email" required>Email</InputWithLabel>
            <InputWithLabel ref={passwordInputRef} type="password" id="password" name="Password" required>Password</InputWithLabel>
            <CheckboxWithLabel ref={rememberMeCheckboxRef} id="remember" name="Remember">Remember me?</CheckboxWithLabel>
            <Button color={'primary'} onClick={props.onSubmit}>Login</Button>
            <ForgotPasswordElement>Forgot password?</ForgotPasswordElement>
            <Divider text='OR'/>
            <SocialButtonList socials={props.socials}/>
            <TextWithLink paragraphText={'Need an account?'} href={'/register'} anchorText={'SIGN UP'}/>
        </FormContainer>
  )
}

export default forwardRef(Form)
