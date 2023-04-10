import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Heading from './Heading'

describe('Heading', () => {
  it('renders correctly', () => {
    const component = render(<Heading>Testing</Heading>)
    expect(component.getByText('Testing')).toBeInTheDocument()
  })

  it('renders correct html heading tag', () => {
    /* const levels: Array<IHeadingProps['level']> = [1, 2, 3, 4, 5, 6]
    for (let i = 0; i < levels.length; i++) {
      const component = render(<Heading level={levels[i]}>Testing</Heading>)
      expect(component.container.querySelector(`h${i}`)).toBeInTheDocument()
    } */
    const component = render(<Heading level={1}>Testing</Heading>)
    expect(component.container.querySelector('h1')).toBeInTheDocument()
    const component2 = render(<Heading level={2}>Testing</Heading>)
    expect(component2.container.querySelector('h2')).toBeInTheDocument()
    const component3 = render(<Heading level={3}>Testing</Heading>)
    expect(component3.container.querySelector('h3')).toBeInTheDocument()
    const component4 = render(<Heading level={4}>Testing</Heading>)
    expect(component4.container.querySelector('h4')).toBeInTheDocument()
    const component5 = render(<Heading level={5}>Testing</Heading>)
    expect(component5.container.querySelector('h5')).toBeInTheDocument()
    const component6 = render(<Heading level={6}>Testing</Heading>)
    expect(component6.container.querySelector('h6')).toBeInTheDocument()
  })
})
