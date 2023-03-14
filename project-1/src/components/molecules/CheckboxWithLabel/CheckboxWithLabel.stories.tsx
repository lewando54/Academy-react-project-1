/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CheckboxWithLabel from './CheckboxWithLabel'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: CheckboxWithLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    id: { control: 'text' },
    children: { control: 'text' }
  }
} as ComponentMeta<typeof CheckboxWithLabel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckboxWithLabel> = (args) => <CheckboxWithLabel {...args} />

export const Primary = Template.bind({})

Primary.args = {
  color: '#e90800',
  children: 'Example label',
  id: 'checkbox-id'
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
