import React, { forwardRef } from 'react'
import LoginForm, { ILoginProps, ILoginRef } from '../../organisms/LoginForm/LoginForm'
import PageWrapper from '../../../components/templates/PageWrapperTemplate/PageWrapper.style'
import styled from 'styled-components'

const LoginWrapper = styled(PageWrapper)`
    background-color: #3fa5ea
`

function LoginTemplate (props: ILoginProps, ref: React.Ref<ILoginRef>): React.ReactElement {
  return (
    <LoginWrapper>
        <LoginForm ref={ref} onSubmit={props.onSubmit} socials={props.socials}/>
    </LoginWrapper>
  )
}

export default forwardRef(LoginTemplate)
