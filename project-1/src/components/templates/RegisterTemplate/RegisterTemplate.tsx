import React, { forwardRef } from 'react'
import RegisterForm from '../../organisms/RegisterForm/RegisterForm'

function RegisterTemplate (props: any, ref: any): React.ReactElement {
  return (
        <RegisterForm ref={ref} onSubmit={props.onSubmit}/>
  )
}

export default forwardRef(RegisterTemplate)
