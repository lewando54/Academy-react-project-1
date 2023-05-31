import React, { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'

describe('LoginForm', () => {
  interface ILoginFormRef {
    email: HTMLInputElement
    password: HTMLInputElement
    rememberMe: HTMLInputElement
    focus: () => void
    clear: () => void
  }

  const socials: TSocialsArray = [
    { id: 1, color: 'blue', href: 'Facebook', icon: 'facebook' },
    { id: 2, color: 'red', href: 'Google', icon: 'google' }
  ]
  const onSubmit = jest.fn()
  const testId = 'login-form'

  it('should render all form elements', () => {
    const { getByLabelText, getByText, getByRole } = render(
      <MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} testId={testId} /></MemoryRouter>
    )

    expect(getByLabelText('Email')).toBeInTheDocument()
    expect(getByLabelText('Password')).toBeInTheDocument()
    expect(getByText('Remember me?')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByText('Forgot password?')).toBeInTheDocument()
    expect(getByText('OR')).toBeInTheDocument()
    expect(getByText('Need an account?')).toBeInTheDocument()
    expect(getByText('SIGN UP')).toBeInTheDocument()
  })

  it('should call onSubmit when the form is submitted', () => {
    const { getByTestId } = render(
      <MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} testId={testId} /></MemoryRouter>
    )
    const submitButton = getByTestId(`${testId}_submit`)
    fireEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalled()
  })

  it('should clear all inputs when the clear method is called', () => {
    const formRef = createRef<ILoginFormRef>()

    const { getByLabelText } = render(
      <MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} ref={formRef} testId={testId} /></MemoryRouter>
    )

    const emailInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const rememberMeCheckbox = getByLabelText('Remember me?')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.click(rememberMeCheckbox)

    formRef.current?.clear()

    expect(formRef.current?.email.value).toBe('')
    expect(formRef.current?.password.value).toBe('')
    expect(formRef.current?.rememberMe.checked).toBe(false)
  })

  it('should focus on the email input when the focus method is called', () => {
    const formRef = createRef<ILoginFormRef>()

    const { getByLabelText } = render(
      <MemoryRouter><LoginForm socials={socials} onSubmit={onSubmit} ref={formRef} testId={testId} /></MemoryRouter>
    )

    const emailInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    fireEvent.focus(passwordInput)

    formRef.current?.focus()

    expect(document.activeElement).toBe(emailInput)
  })
})
