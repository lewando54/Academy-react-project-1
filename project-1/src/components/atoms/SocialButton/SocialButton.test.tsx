import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SocialButton from './SocialButton'

describe('Social Button', () => {
  it('should render social button element', () => {
    render(<SocialButton color='blue' href='https://www.facebook.com' icon='facebook' testId='social-button'/>)
    expect(screen.getByTestId('social-button')).toBeInTheDocument()
  })

  it('should have correct color', () => {
    render(<SocialButton color='red' href='https://www.facebook.com' icon='facebook' testId='social-button'/>)
    expect(screen.getByTestId('social-button')).toHaveStyle({ color: 'red' })
  })

  it('should have correct href', () => {
    render(<SocialButton color='blue' href='https://www.linkedin.com' icon='linkedin' testId='social-button'/>)
    expect(screen.getByTestId('social-button')).toHaveAttribute('href', 'https://www.linkedin.com')
  })

  it('should have correct icon', () => {
    render(<SocialButton color='blue' href='https://www.google.com' icon='google' testId='social-button'/>)
    expect(screen.getByTestId('social-button').innerHTML).toEqual('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 488 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>')
  })
})
