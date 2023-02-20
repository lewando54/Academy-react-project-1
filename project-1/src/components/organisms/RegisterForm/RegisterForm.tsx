import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Button from '../../atoms/Button/Button'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import Or from '../../atoms/Divider/Divider'
import SocialButtonList from '../../molecules/SocialButtonList/SocialButtonList'
import FormContainer from './RegisterForm.style'
import Heading from '../../atoms/Heading/Heading.style'
import TextWithLink from '../../atoms/TextWithLink/TextWithLink'

function RegisterForm (props: any, ref: any): React.ReactElement {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      emailInputRef: emailInputRef.current,
      passwordInputRef: passwordInputRef.current
    }
  }, [emailInputRef, passwordInputRef])

  // Logika przeniesiona do page
  // Posprzątać!!!

  return (
        <FormContainer>
            <Heading>Sign up</Heading>
            <InputWithLabel ref={emailInputRef} type="email" id="email" name="Email" required>Email</InputWithLabel>
            <InputWithLabel ref={passwordInputRef} type="password" id="password" name="Password" required>Password</InputWithLabel>
            <Button color="primary" onClick={props.onSubmit}>Sign up</Button>
            <Or text='OR'/>
            <SocialButtonList />
            <TextWithLink pText={'Already a user?'} href={'/login'} anchorText={'SIGN UP'}/>
        </FormContainer>
  )
}

export default forwardRef(RegisterForm)
