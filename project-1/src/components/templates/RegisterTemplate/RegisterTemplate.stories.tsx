/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6';
import RegisterTemplate from './RegisterTemplate'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: RegisterTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    socials: { control: 'array' },
    onSubmit: { action: 'submitted form' }
  },
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/register'
    }
  }
} as ComponentMeta<typeof RegisterTemplate>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RegisterTemplate> = (args) => <RegisterTemplate {...args} />

export const Primary = Template.bind({})

Primary.args = {
  socials: [
    { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
    { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
    { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
  ]
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
