import React, { forwardRef } from 'react'
import RegisterForm, { IRegisterProps, IRegisterRef } from '../../organisms/RegisterForm/RegisterForm'

function RegisterTemplate (props: IRegisterProps, ref: React.Ref<IRegisterRef>): React.ReactElement {
  return (
        <RegisterForm ref={ref} onSubmit={props.onSubmit} socials={props.socials}/>
  )
}

export default forwardRef(RegisterTemplate)
