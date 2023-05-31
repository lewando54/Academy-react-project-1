import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Button from '../../atoms/Button/Button'
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel'
import Divider from '../../atoms/Divider/Divider'
import SocialButtonList, { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'
import FormContainer from './RegisterForm.style'
import Heading from '../../atoms/Heading/Heading'
import TextWithLink from '../../atoms/TextWithLink/TextWithLink'

export interface IRegisterProps {
  socials: TSocialsArray
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void
}

export interface IRegisterRef {
  email: HTMLInputElement | null
  password: HTMLInputElement | null
}

function RegisterForm (props: IRegisterProps, ref: React.Ref<IRegisterRef>): React.ReactElement {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      email: emailInputRef.current,
      password: passwordInputRef.current,
      focus () {
        if (emailInputRef.current != null) {
          emailInputRef.current.focus()
        }
      },
      clear () {
        if (emailInputRef.current != null &&
          passwordInputRef.current != null) {
          emailInputRef.current.value = ''
          passwordInputRef.current.value = ''
        }
      }
    }
  }, [])

  return (
        <FormContainer>
            <Heading testId='headingtest'>Sign up</Heading>
            <InputWithLabel ref={emailInputRef} type="email" id="email" name="Email" required testId='emailtest'>Email</InputWithLabel>
            <InputWithLabel ref={passwordInputRef} type="password" id="password" name="Password" required testId='passtest'>Password</InputWithLabel>
            <Button color="primary" onClick={props.onSubmit} testId='buttontest'>Sign up</Button>
            <Divider text='OR' testId='dividertest'/>
            <SocialButtonList socials={props.socials} testId='socialbuttonlisttest'/>
            <TextWithLink paragraphText={'Already a user?'} href={'/login'} anchorText={'LOGIN'} testId='textwithlinktest'/>
        </FormContainer>
  )
}

export default forwardRef(RegisterForm)
