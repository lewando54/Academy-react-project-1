import React from 'react'
import { StyledButton } from './Button.style'

type colorProp = 'primary' | 'secondary'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: colorProp
}

function Button ({ color = 'primary', children, onClick }: ButtonProps): React.ReactElement {
  return (
        <StyledButton onClick={onClick} color={color}>
            {children}
        </StyledButton>
  )
}

export default Button
