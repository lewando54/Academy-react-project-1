import React, { forwardRef } from 'react'
import StyledCheckbox from './Checkbox.style'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
}

function Checkbox ({ id, children }: CheckboxProps, ref: any): React.ReactElement {
  return (
        <StyledCheckbox ref={ref} id={id} type={'checkbox'}/>
  )
}

export default forwardRef(Checkbox)
