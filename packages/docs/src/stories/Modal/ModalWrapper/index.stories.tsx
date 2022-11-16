import { useArgs } from '@storybook/client-api'
import { Meta, Story } from '@storybook/react'

import {
  Button,
  Modal as ModalComponent,
  ModalContent,
  ModalTrigger,
  ModalWrapper as ModalWrapperComponent,
  ModalWrapperProps,
  Text,
} from '@poc-fapp-ui/react'

export default {
  title: 'Overlay/Modal/ModalWrapper',
  component: ModalWrapperComponent,
  argTypes: {
    width: {
      control: { type: 'range', min: 200, max: 1280, step: 10 },
      defaultValue: { summary: '700' },
    },
    children: { table: { disable: true } },
  },
} as Meta<ModalWrapperProps>

const Template: Story<ModalWrapperProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <ModalComponent onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Open modal</Button>
      </ModalTrigger>

      <ModalWrapperComponent {...args}>
        <ModalContent>
          <Text as="span" size="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Text>
        </ModalContent>
      </ModalWrapperComponent>
    </ModalComponent>
  )
}

export const ModalWrapper = Template.bind({})
ModalWrapper.args = {
  width: 700,
}
