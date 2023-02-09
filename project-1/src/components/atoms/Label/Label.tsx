import React from 'react'

export interface LabelProps {
  children?: string
  htmlFor?: string
}

function Label ({ children, htmlFor }: LabelProps): React.ReactElement {
  return (<label htmlFor={htmlFor}>{children}</label>)
}

export default Label
