import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import RegisterTemplate from './RegisterTemplate'
import { TSocialsArray } from '../../molecules/SocialButtonList/SocialButtonList'

describe('LoginTemplate', () => {
  const socials: TSocialsArray = [
    { id: 1, color: 'blue', href: 'Facebook', icon: 'facebook' },
    { id: 2, color: 'red', href: 'Google', icon: 'google' }
  ]
  const onSubmit = jest.fn()

  it('should render form', () => {
    const { getByLabelText, getByText, getByRole } = render(
      <MemoryRouter><RegisterTemplate socials={socials} onSubmit={onSubmit}/></MemoryRouter>
    )

    expect(getByLabelText('Email')).toBeInTheDocument()
    expect(getByLabelText('Password')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByText('OR')).toBeInTheDocument()
    expect(getByText('Already a user?')).toBeInTheDocument()
    expect(getByText('LOGIN')).toBeInTheDocument()
  })

  it('should call onSubmit when the form is submitted', () => {
    const { getByTestId } = render(
        <MemoryRouter><RegisterTemplate socials={socials} onSubmit={onSubmit}/></MemoryRouter>
    )
    const submitButton = getByTestId('buttontest')
    fireEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalled()
  })
})