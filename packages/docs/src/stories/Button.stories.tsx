import { Meta, StoryObj } from '@storybook/react'
import { Card, User } from 'iconsax-react'

import { Button as ButtonComponent, ButtonProps } from '@fapp-ui-poc/react'

const iconArgType = {
  options: ['noIcon', 'Card', 'User'],
  mapping: { noIcon: null, Card, User },
  control: {
    type: 'select',
    labels: { noIcon: 'No icon' },
  },
}

export default {
  title: 'Form/Button',
  component: ButtonComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    colorScheme: {
      control: { type: 'inline-radio' },
      defaultValue: { summary: '"primary"' },
      options: ['primary', 'success', 'error'],
    },
    variant: {
      control: { type: 'inline-radio' },
      defaultValue: { summary: '"contained"' },
      options: ['contained', 'outlined', 'link'],
    },
    size: {
      control: { type: 'inline-radio' },
      defaultValue: { summary: '"medium"' },
      options: ['small', 'medium', 'large'],
    },
    full: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
    },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
  args: {
    children: 'Button',
    full: false,
    disabled: false,
    size: 'medium',
    variant: 'contained',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: { colorScheme: 'primary' },
}

export const Success: StoryObj<ButtonProps> = {
  args: { colorScheme: 'success' },
}

export const Error: StoryObj<ButtonProps> = {
  args: { colorScheme: 'error' },
}
