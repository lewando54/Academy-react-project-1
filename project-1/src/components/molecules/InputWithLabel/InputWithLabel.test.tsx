import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import InputWithLabel from './InputWithLabel'

describe('InputWithLabel', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<InputWithLabel htmlFor='checkid' id='checkid' name='test' type='text' testId='test'>Testing</InputWithLabel>)
    expect(tree).toMatchSnapshot()
  })
})
