import React from 'react'
import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import SocialButtonList, { TSocialsArray } from './SocialButtonList'

describe('SocialButtonList', () => {
  it('should render correctly', () => {
    const socials: TSocialsArray = [
      { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
      { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
      { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
    ]

    const tree = renderer.create(<SocialButtonList socials={socials} testId='test'/>)
    expect(tree).toMatchSnapshot()
    // Check czy się tworzą elementy
  })
})
