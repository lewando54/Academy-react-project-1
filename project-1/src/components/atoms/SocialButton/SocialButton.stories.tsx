/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SocialButton from './SocialButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: SocialButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    href: { control: 'text' },
    icon: { control: 'select', options: ['google', 'facebook', 'linkedin'] }
  }
} as ComponentMeta<typeof SocialButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />

export const Google = Template.bind({})

Google.args = {
  color: '#e90800',
  icon: 'google',
  href: 'https://google.pl/'
}

export const Facebook = Template.bind({})

Facebook.args = {
  color: '#4768aa',
  icon: 'facebook',
  href: 'https://facbook.com/'
}

export const Linkedin = Template.bind({})

Linkedin.args = {
  color: '#0068c1',
  icon: 'linkedin',
  href: 'https://linkedin.com/'
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
