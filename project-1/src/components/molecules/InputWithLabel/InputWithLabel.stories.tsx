/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputWithLabel from './InputWithLabel'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: InputWithLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'select', options: ['text', 'mail', 'password', 'date'] },
    children: { control: 'text' }
  }
} as ComponentMeta<typeof InputWithLabel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputWithLabel> = (args) => <InputWithLabel {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Example label',
  id: 'input-id',
  name: 'input-name',
  type: 'text'
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
