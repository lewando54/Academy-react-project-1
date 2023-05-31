import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as renderer from 'react-test-renderer'
import InputWithLabel from './InputWithLabel'

describe('InputWithLabel', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<InputWithLabel htmlFor='checkid' id='checkid' name='test' type='text' testId='test'>Testing</InputWithLabel>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input with label with text', () => {
    const { getByText } = render(<InputWithLabel htmlFor='checkid' id='checkid' name='test' type='text' testId='test'>Testing</InputWithLabel>)
    expect(getByText('Testing')).toBeInTheDocument()
  })

  it('should have correct "for" attribute in label', () => {
    const { getByText } = render(<InputWithLabel htmlFor='checkid' id='checkid' name='test' type='text' testId='test'>Testing</InputWithLabel>)
    expect(getByText('Testing').getAttribute('for')).toEqual('checkid')
  })
})
