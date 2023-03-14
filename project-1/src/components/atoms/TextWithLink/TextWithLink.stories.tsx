/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextWithLink from './TextWithLink'
import { withRouter } from 'storybook-addon-react-router-v6';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: TextWithLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    paragraphText: { control: 'text' },
    anchorText: { control: 'text' },
    href: { control: 'text' }
  },

  decorators: [withRouter]
} as ComponentMeta<typeof TextWithLink>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextWithLink> = (args) => <TextWithLink {...args} />

export const Register = Template.bind({})
export const Login = Template.bind({})

Register.args = {
  paragraphText: 'Already a user?',
  anchorText: 'LOG IN',
  href: '/login'
}

Register.parameters = {
  reactRouter: {
    routePath: '/register'
  }
}

Login.args = {
  paragraphText: 'Dont have an account?',
  anchorText: 'SIGN UP',
  href: '/register'
}

Login.parameters = {
  reactRouter: {
    routePath: '/login'
  }
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
