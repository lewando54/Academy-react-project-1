import React from 'react'
import LoginTemplate from '../../components/templates/LoginTemplate/LoginTemplate'
import PageWrapper from '../../components/templates/PageWrapperTemplate/PageWrapper.style'
import styled from 'styled-components'

const LoginWrapper = styled(PageWrapper)`
    background-color: #3fa5ea
`

function LoginPage (): React.ReactElement {
  return (
        <LoginWrapper>
            <LoginTemplate />
        </LoginWrapper>
  )
}

export default LoginPage
