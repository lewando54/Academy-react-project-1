import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import CheckboxWithLabel from './CheckboxWithLabel'

describe('CheckboxWithLabel', () => {
    // Sprawdzić children w przekazaniu
  it('should render correctly', () => {
    const tree = renderer.create(<CheckboxWithLabel htmlFor='checkid' id='checkid' testId='test'>Testing</CheckboxWithLabel>)
    expect(tree).toMatchSnapshot()
  })
})
