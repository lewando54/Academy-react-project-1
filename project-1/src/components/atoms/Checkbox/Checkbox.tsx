import React from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  innerRef: React.RefObject<HTMLInputElement>
  id: string
}

function Checkbox ({ id, children, innerRef }: CheckboxProps): React.ReactElement {
  return (
        <input ref={innerRef} id={id} type="checkbox"/>
  )
}

export default Checkbox
