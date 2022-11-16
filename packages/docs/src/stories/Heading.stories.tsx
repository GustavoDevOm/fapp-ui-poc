import type { Meta, StoryObj } from '@storybook/react'
import { Heading as HeadingComponent, HeadingProps } from '@fapp-ui-poc/react'

export default {
  title: 'Typography/Heading',
  component: HeadingComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    size: {
      control: { type: 'inline-radio' },
      defaultValue: { summary: 'md' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
    },
  },
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Heading: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
