import React from 'react'

export interface LabelProps {
  children?: string
  htmlFor?: string
  testId: string
}

function Label ({ children, htmlFor, testId }: LabelProps): React.ReactElement {
  return (<label htmlFor={htmlFor} data-testid={testId}>{children}</label>)
}

export default Label
