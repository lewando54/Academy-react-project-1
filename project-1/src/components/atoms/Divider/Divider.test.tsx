import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Divider from './Divider'

describe('Divider', () => {
  it('renders correctly', () => {
    const { container } = render(<Divider />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with optional text', () => {
    const { container } = render(<Divider text='Hello World!' />)
    expect(container.querySelector('p')).toHaveTextContent('Hello World!')
  })

  it('does not render text when text prop is empty', () => {
    const { container } = render(<Divider />)
    expect(container.querySelector('p')).toBeNull()
  })
})
