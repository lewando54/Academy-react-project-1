/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6';
import RegisterForm from './RegisterForm'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: RegisterForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    socials: { control: 'array' },
    onSubmit: { action: 'submitted form' }
  },
  decorators: [withRouter]
} as ComponentMeta<typeof RegisterForm>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />

export const Primary = Template.bind({})

Primary.args = {
  socials: [
    { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
    { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
    { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
  ]
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
