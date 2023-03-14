/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from './Heading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    children: { control: 'text' }
  }
} as ComponentMeta<typeof Heading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
