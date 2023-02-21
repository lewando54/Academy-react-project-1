import React, { forwardRef } from 'react'
import StyledCheckbox from './Checkbox.style'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  color?: string
}

function Checkbox ({ id, color }: CheckboxProps, ref: any): React.ReactElement {
  return (
        <StyledCheckbox ref={ref} id={id} type={'checkbox'} color={color}/>
  )
}

export default forwardRef(Checkbox)
