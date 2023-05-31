import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as renderer from 'react-test-renderer'
import CheckboxWithLabel from './CheckboxWithLabel'

describe('CheckboxWithLabel', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CheckboxWithLabel htmlFor='checkid' id='checkid' testId='test'>Testing</CheckboxWithLabel>)
    expect(tree).toMatchSnapshot()
  })

  it('should render label with text', () => {
    const { getByText } = render(<CheckboxWithLabel htmlFor='checkid' id='checkid' testId='test'>Testing</CheckboxWithLabel>)
    expect(getByText('Testing')).toBeInTheDocument()
  })

  it('should have correct "for" attribute in label', () => {
    const { getByText } = render(<CheckboxWithLabel htmlFor='checkid' id='checkid' testId='test'>Testing</CheckboxWithLabel>)
    expect(getByText('Testing').getAttribute('for')).toEqual('checkid')
  })
})
