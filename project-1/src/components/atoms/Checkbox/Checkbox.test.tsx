import React from 'react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
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

  it('should have correct color on hover', () => {
    const { getByTestId } = render(<Checkbox id='checkbox' color='red' testId='checkbox'/>)
    expect(getByTestId('checkbox')).toHaveStyleRule('border: 0.15em solid red')
  })

  it('should have correct color when checked', () => {
    const { getByTestId } = render(<Checkbox id='checkbox' color='red' testId='checkbox'/>)
    fireEvent.click(getByTestId('checkbox'))
    expect(getByTestId('checkbox')).toHaveStyle({ backgroundColor: 'red' })
  })
})
