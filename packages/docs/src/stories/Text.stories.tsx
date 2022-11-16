import type { Meta, StoryObj } from '@storybook/react'
import { Text as TextComponent, TextProps } from '@fapp-ui-poc/react'

export default {
  title: 'Typography/Text',
  component: TextComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    size: {
      control: { type: 'inline-radio' },
      defaultValue: { summary: 'md' },
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    weight: {
      control: { type: 'inline-radio' },
      defaultValue: { summary: 'regular' },
      options: ['regular', 'medium', 'bold'],
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
} as Meta<TextProps>

export const Text: StoryObj<TextProps> = {
  args: {
    size: 'md',
    weight: 'regular',
  },
}
