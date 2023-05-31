import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import LoginTemplate from './LoginTemplate'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'

describe('LoginTemplate', () => {
  const socials: TSocialsArray = [
    { id: 1, color: 'blue', href: 'Facebook', icon: 'facebook' },
    { id: 2, color: 'red', href: 'Google', icon: 'google' }
  ]
  const onSubmit = jest.fn()

  it('should render form', () => {
    const { getByLabelText, getByText, getByRole } = render(
      <MemoryRouter><LoginTemplate socials={socials} onSubmit={onSubmit} testId='testwrapper'/></MemoryRouter>
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
        <MemoryRouter><LoginTemplate socials={socials} onSubmit={onSubmit} testId='testwrapper'/></MemoryRouter>
    )
    const submitButton = getByTestId('wrapperformtest_submit')
    fireEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalled()
  })
})
