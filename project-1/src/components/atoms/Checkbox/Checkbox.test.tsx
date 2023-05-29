import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Checkbox testId="checkbox" id="test" />)
    expect(tree).toMatchSnapshot()
  })

  it('should be checked if clicked when is unchecked', () => {
    const { getByTestId } = render(<Checkbox testId="checkbox" id="test" />)
    fireEvent.click(getByTestId('checkbox'))
    expect(getByTestId('checkbox')).toBeChecked()
  })

  it('should be unchecked if clicked twice', () => {
    const { getByTestId } = render(<Checkbox testId="checkbox" id="test" />)
    fireEvent.click(getByTestId('checkbox'))
    expect(getByTestId('checkbox')).toBeChecked()
    fireEvent.click(getByTestId('checkbox'))
    expect(getByTestId('checkbox')).not.toBeChecked()
  })

  it('should have color passed properly', () => {
    const tree = renderer.create(<Checkbox testId="checkbox" id="test" color="#ff0000" />)
    expect(tree).toMatchSnapshot()
  })

  // Should render correctly when color is set + sprawdzenie na propsa
})
