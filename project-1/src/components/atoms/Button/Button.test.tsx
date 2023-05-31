import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button testId='testxd' color="primary">Click me</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render with primary color by default', () => {
    const tree = renderer.create(<Button testId='testxd'>Click me</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render innerHTML text', () => {
    const { getByTestId } = render(<Button testId='testxd' color="secondary">Click me</Button>)
    expect(getByTestId('testxd')).toHaveTextContent('Click me')
  })

  it('should render with primary color', () => {
    render(<Button testId='button' color={'primary'}>Click me</Button>)
    expect(screen.getByTestId('button')).toHaveStyle({ backgroundColor: 'var(--primary)' })
  })

  it('should render with secondary color', () => {
    render(<Button testId='button' color={'secondary'}>Click me</Button>)
    expect(screen.getByTestId('button')).toHaveStyle({ backgroundColor: 'var(--secondary)' })
  })

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button testId='testxd' onClick={onClick}>Click me</Button>)
    fireEvent.click(getByTestId('testxd'))
    expect(onClick).toHaveBeenCalled()
  })

})
