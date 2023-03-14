import React, { forwardRef, HTMLInputTypeAttribute } from 'react'
import StyledInput from './Input.style'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type: HTMLInputTypeAttribute
  required?: boolean
}

function Input (props: InputProps, ref: React.Ref<HTMLInputElement>): React.ReactElement {
  return (
    <StyledInput id={props.id} name={props.name} type={props.type} required={props.required} ref={ref} />
  )
}

export default forwardRef(Input)
