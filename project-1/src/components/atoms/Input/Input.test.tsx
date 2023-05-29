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

  // Sprawdzenie type w HTML
  it('should render input of type button', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'button'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type checkbox', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'checkbox'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type color', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'color'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type date', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'date'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type datetime-local', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'datetime-local'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type email', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'email'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type file', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'file'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type hidden', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'hidden'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type image', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'image'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type month', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'month'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type number', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'number'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type password', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'password'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type radio', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'radio'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type range', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'range'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type reset', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'reset'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type search', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'search'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type submit', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'submit'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type tel', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'tel'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type text', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'text'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type time', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'time'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type url', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'url'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render input of type week', () => {
    const tree = renderer.create(<Input id={'test-input'} name={'testing'} type={'week'} testId='input'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should input text correctly', () => {
    render(<Input id={'test-input'} name={'testing'} type={'text'} testId='input'/>)
    const inputNode = screen.getByTestId('input')
    fireEvent.change(inputNode, { target: { value: 'Example value for test' } })
    expect(inputNode).toHaveValue('Example value for test')
  })
})
