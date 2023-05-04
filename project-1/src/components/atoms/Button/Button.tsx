import React from 'react'
import { StyledButton } from './Button.style'

type colorProp = 'primary' | 'secondary'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: colorProp
  testId: string
}

function Button ({ color = 'primary', children, onClick, testId }: ButtonProps): React.ReactElement {
  return (
        <StyledButton data-testid={testId} onClick={onClick} color={color}>
            {children}
        </StyledButton>
  )
}

export default Button
