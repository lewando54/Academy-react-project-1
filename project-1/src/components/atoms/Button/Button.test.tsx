import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const component = render(<Button>Click me</Button>)
    expect(component.getByText('Click me')).toBeInTheDocument()
  })

  it('renders with the correct color', () => {
    render(
      <>
        <style>
          {`:root {
            --primary: primaryColor;
            --secondary: secondaryColor;
          }`}
        </style>
        <Button color="primary">Test Button</Button>
      </>
    )

    const button = screen.getByRole('button', { name: 'Test Button' })

    // Sprawdź, czy przycisk ma poprawny kolor
    expect(button).toHaveStyle({ backgroundColor: 'var(--primary)' })

    // Renderuj przycisk z innym kolorem
    render(
      <>
        <style>
          {`:root {
            --primary: rgb(236, 72, 153);
            --secondary: rgb(229, 231, 235);
          }`}
        </style>
        <Button color="secondary">Test Button</Button>
      </>
    )

    // Sprawdź, czy przycisk ma poprawny kolor
    expect(button).toHaveStyle({ backgroundColor: 'var(--secondary)' })
  })

  it('calls onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })
})
