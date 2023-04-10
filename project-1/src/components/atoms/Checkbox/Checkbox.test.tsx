import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const component = render(<Checkbox id="test" />)
    expect(component.getByRole('checkbox')).toBeInTheDocument()
  })

  it('checked and unchecked if clicked', () => {
    const { getByRole } = render(<Checkbox id="test" />)
    fireEvent.click(getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
    fireEvent.click(getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })
})
