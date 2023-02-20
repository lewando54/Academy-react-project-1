import React, { forwardRef } from 'react'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import PageWrapper from '../../../components/templates/PageWrapperTemplate/PageWrapper.style'
import styled from 'styled-components'

const LoginWrapper = styled(PageWrapper)`
    background-color: #3fa5ea
`

function LoginTemplate (props: any, ref: any): React.ReactElement {
  return (
    <LoginWrapper>
        <LoginForm ref={ref} onSubmit={props.onSubmit} />
    </LoginWrapper>
  )
}

export default forwardRef(LoginTemplate)
