import React from 'react'
import { StyledInput } from './Input.style'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  innerRef: React.RefObject<HTMLInputElement>
  id: string
  type: string
  required?: boolean
}

function Input ({ id, name, type, innerRef, required }: InputProps): React.ReactElement {
  return (
        <StyledInput ref={innerRef} id={id} name={name} type={type} required/>
  )
}

export default Input
