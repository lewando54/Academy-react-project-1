import React, { createRef } from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'

const socials: TSocialsArray = [
  { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
  { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
  { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
]

interface ILoginFormRef {
  email: HTMLInputElement
  password: HTMLInputElement
  rememberMe: HTMLInputElement
  focus: () => void
  clear: () => void
}

describe('LoginForm', () => {
  it('should render correctly', () => {
    const onSubmit = jest.fn()

    const tree = renderer.create(<MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} testId='test'></LoginForm></MemoryRouter>)
    expect(tree).toMatchSnapshot()
  })

  it('should call onSubmit function when submitting', () => {
    const onSubmit = jest.fn()

    render(<MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} testId='test'></LoginForm></MemoryRouter>)
    fireEvent.click(screen.getByRole('submit'))
    expect(onSubmit).toBeCalled()
  })

  it('should focus on email', () => {
    const ref = createRef<ILoginFormRef>()

    const onSubmit = (): void => {
      ref.current?.focus()
    }

    render(<MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} testId='test' ref={ref}></LoginForm></MemoryRouter>)
    fireEvent.click(screen.getByTestId('test_submit'))
    const focusedElement = document.activeElement
    expect(screen.getAllByRole('email')).toEqual(focusedElement)
  })

  it('should clear the inputs', () => {
    const onSubmit = jest.fn()
    const ref = createRef<ILoginFormRef>()

    render(<MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} testId='test' ref={ref}></LoginForm></MemoryRouter>)
    ref.current?.clear()
    expect(ref.current?.clear).toBeCalled()
  })
})
