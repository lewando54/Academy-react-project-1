import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import SocialButton from './SocialButton'

describe('Social Button', () => {

    // Checki na propsy
  it('should render a red google social button', () => {
    const tree = renderer.create(<SocialButton color='#ff0000' href='https://google.pl/' icon='google' testId='social'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render a blue facebook social button', () => {
    const tree = renderer.create(<SocialButton color='#0000ff' href='https://facebook.com/' icon='facebook' testId='social'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render a cyan linkedin social button', () => {
    const tree = renderer.create(<SocialButton color='#00ffff' href='https://linkedin.com/' icon='linkedin' testId='social'/>)
    expect(tree).toMatchSnapshot()
  })
})
