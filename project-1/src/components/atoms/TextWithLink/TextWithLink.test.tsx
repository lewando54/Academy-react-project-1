import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import TextWithLink from './TextWithLink'
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter, BrowserRouter, Route, Routes } from 'react-router-dom'

describe('Text With Link', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MemoryRouter><TextWithLink paragraphText='test' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(tree).toMatchSnapshot()
  })

  it('should render paragraphText correctly', () => {
    const { getByText } = render(<MemoryRouter><TextWithLink paragraphText='testingP' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(getByText('testingP')).toBeInTheDocument()
  })

  it('should render anchor tag text correctly', () => {
    const { getByText } = render(<MemoryRouter><TextWithLink paragraphText='testingP' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(getByText('click me')).toBeInTheDocument()
  })

  it('should navigate in app properly after click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TextWithLink paragraphText='testingP' anchorText='click me' href='/test' testId='test' />} />
          <Route path='/test' element={<p>Correct!</p>} />
        </Routes>
      </BrowserRouter>
    )

    fireEvent.click(getByText('click me'))

    console.log(window.location.pathname)

    expect(window.location.pathname).toBe('/test')
  })
})
