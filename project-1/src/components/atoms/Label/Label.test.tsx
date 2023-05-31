import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Label from './Label'

describe('Label', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Label htmlFor={'some-test-input'} testId='label'></Label>)
    expect(tree).toMatchSnapshot()
  })

  it('should render text "InnerHTML Test"', () => {
    const { getByTestId } = render(<Label htmlFor={'some-test-input'} testId='label'>InnerHTML Test</Label>)
    expect(getByTestId('label')).toHaveTextContent('InnerHTML Test')
  })

  it('should have correct htmlFor', () => {
    render(<Label htmlFor='email' testId='label'>Email</Label>)
    expect(screen.getByTestId('label')).toHaveAttribute('for', 'email')
  })
})
