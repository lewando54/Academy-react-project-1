import React, { forwardRef } from 'react'
import StyledCheckbox from './Checkbox.style'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  color?: string
  testId: string
}

function Checkbox ({ id, color, testId }: CheckboxProps, ref: React.Ref<HTMLInputElement>): React.ReactElement {
  return (
        <StyledCheckbox data-testid={testId} ref={ref} id={id} type={'checkbox'} color={color}/>
  )
}

export default forwardRef(Checkbox)
