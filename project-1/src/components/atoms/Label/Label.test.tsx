import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Label from './Label'

describe('Label', () => {
  it('renders correctly', () => {
    const component = render(<Label htmlFor={'some-test-input'}>InnerHTML Test</Label>)
    expect(component.container.querySelector('label[for="some-test-input"]')).toBeInTheDocument()
  })

  it('renders correct text inside', () => {
    render(<Label htmlFor='some-test-input'>InnerHTML Test</Label>)
    const label = screen.findByText('InnerHTML Test')
    expect(label).toContainHTML('InnerHTML Test')
  })
})

// Coverage -> npm run test --coverage
