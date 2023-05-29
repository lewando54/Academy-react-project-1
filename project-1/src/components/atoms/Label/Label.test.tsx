import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import Label from './Label'

describe('Label', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Label htmlFor={'some-test-input'} testId='label'></Label>)
    expect(tree).toMatchSnapshot()
  })

  it('should render text "InnerHTML Test"', () => {
    const tree = renderer.create(<Label htmlFor={'some-test-input'} testId='label'>InnerHTML Test</Label>)
    expect(tree).toMatchSnapshot()
  })
})
