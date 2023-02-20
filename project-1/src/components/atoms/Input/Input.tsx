import React, { forwardRef } from 'react'
import StyledInput from './Input.style'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type: string
  required?: boolean
}

function Input (props: InputProps, ref: any): React.ReactElement {
  return (
    <StyledInput id={props.id} name={props.name} type={props.type} required={props.required} ref={ref} />
  )
}

export default forwardRef(Input)
