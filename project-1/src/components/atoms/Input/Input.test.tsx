import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'text'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type button', () => {
    render(<Input id='input' name='input' type='button' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'button')
  })

  it('should render input of type checkbox', () => {
    render(<Input id='test-input' name='testing' type='checkbox' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'checkbox')
  })

  it('should render input of type color', () => {
    render(<Input id='test-input' name='testing' type='color' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'color')
  })

  it('should render input of type date', () => {
    render(<Input id='test-input' name='testing' type='date' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'date')
  })

  it('should render input of type datetime-local', () => {
    render(<Input id='test-input' name='testing' type='datetime-local' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'datetime-local')
  })

  it('should render input of type email', () => {
    render(<Input id='test-input' name='testing' type='email' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email')
  })

  it('should render input of type file', () => {
    render(<Input id='test-input' name='testing' type='file' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'file')
  })

  it('should render input of type hidden', () => {
    render(<Input id='test-input' name='testing' type='hidden' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'hidden')
  })

  it('should render input of type image', () => {
    render(<Input id='test-input' name='testing' type='image' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'image')
  })

  it('should render input of type month', () => {
    render(<Input id='test-input' name='testing' type='month' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'month')
  })

  it('should render input of type number', () => {
    render(<Input id='test-input' name='testing' type='number' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'number')
  })

  it('should render input of type password', () => {
    render(<Input id='test-input' name='testing' type='password' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password')
  })

  it('should render input of type radio', () => {
    render(<Input id='test-input' name='testing' type='radio' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'radio')
  })

  it('should render input of type range', () => {
    render(<Input id='test-input' name='testing' type='range' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'range')
  })

  it('should render input of type reset', () => {
    render(<Input id='test-input' name='testing' type='reset' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'reset')
  })

  it('should render input of type search', () => {
    render(<Input id='test-input' name='testing' type='search' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'search')
  })

  it('should render input of type submit', () => {
    render(<Input id='test-input' name='testing' type='submit' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'submit')
  })

  it('should render input of type tel', () => {
    render(<Input id='test-input' name='testing' type='tel' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'tel')
  })

  it('should render input of type text', () => {
    render(<Input id='test-input' name='testing' type='text' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text')
  })

  it('should render input of type time', () => {
    render(<Input id='test-input' name='testing' type='time' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'time')
  })

  it('should render input of type url', () => {
    render(<Input id='test-input' name='testing' type='url' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'url')
  })

  it('should render input of type week', () => {
    render(<Input id='test-input' name='testing' type='week' testId='input'/>)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'week')
  })

  it('should be required when required prop is passed', () => {
    render(<Input id='email' name='email' type='text' required testId='input'/>)
    expect(screen.getByTestId('input')).toBeRequired()
  })

  it('should input text correctly', () => {
    render(<Input id={'test-input'} name={'testing'} type={'text'} testId='input'/>)
    const inputNode = screen.getByTestId('input')
    fireEvent.change(inputNode, { target: { value: 'Example value for test' } })
    expect(inputNode).toHaveValue('Example value for test')
  })
})
