import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import TextWithLink from './TextWithLink'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter, createMemoryRouter, RouterProvider } from 'react-router-dom'

const setupMyTest = (): any => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <>Navigated from Start</>
      },
      {
        path: '/starting/path',
        element: <TextWithLink paragraphText='test' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' />
      }
    ],
    {

      initialEntries: ['/starting/path'],
      initialIndex: 0
    }
  )

  render(<RouterProvider router={router} />)

  return { router }
}

describe('Text With Link', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MemoryRouter><TextWithLink paragraphText='test' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(tree).toMatchSnapshot()
  })

  it('should navigate in app properly after click', async () => {
    const { router } = setupMyTest()

    expect(router.state.location.pathname).toEqual('/starting/path')

    fireEvent.click(screen.getByTestId('atest'))

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/')
    })
  })
})
