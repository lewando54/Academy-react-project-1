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
  testId: string
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

  // Rozbić focus na dwie metody
  useImperativeHandle(ref, () => {
    return {
      email: emailInputRef.current,
      password: passwordInputRef.current,
      rememberMe: rememberMeCheckboxRef.current,
      focus () {
        if (emailInputRef.current != null) {
          emailInputRef.current.focus()
        }
      },
      clear () {
        if (emailInputRef.current != null &&
          passwordInputRef.current != null &&
          rememberMeCheckboxRef.current != null) {
          emailInputRef.current.value = ''
          passwordInputRef.current.value = ''
          rememberMeCheckboxRef.current.checked = false
        }
      }
    }
  }, [])

  // TestId na sztywno

  return (
        <FormContainer>
            <Heading testId={props.testId + '_heading'}>Login</Heading>
            <InputWithLabel ref={emailInputRef} type="email" id="email" name="Email" required testId={props.testId + '_email'}>Email</InputWithLabel>
            <InputWithLabel ref={passwordInputRef} type="password" id="password" name="Password" required testId={props.testId + '_password'}>Password</InputWithLabel>
            <CheckboxWithLabel ref={rememberMeCheckboxRef} id="remember" name="Remember" testId={props.testId + '_remember'} color='red'>Remember me?</CheckboxWithLabel>
            <Button color={'primary'} onClick={props.onSubmit} testId={props.testId + '_submit'}>Login</Button>
            <ForgotPasswordElement>Forgot password?</ForgotPasswordElement>
            <Divider text='OR' testId={props.testId + '_divider'}/>
            <SocialButtonList socials={props.socials} testId={props.testId + '_socialBtnList'}/>
            <TextWithLink paragraphText={'Need an account?'} href={'/register'} anchorText={'SIGN UP'} testId={props.testId + '_textWithLink'} anchorTagTestId={props.testId + '_anchorTextWithLink'}/>
        </FormContainer>
  )
}

export default forwardRef(Form)
