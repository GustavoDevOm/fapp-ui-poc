import { useArgs } from '@storybook/client-api'
import { Meta, Story } from '@storybook/react'

import {
  Button,
  Modal as ModalComponent,
  ModalContent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  Text,
} from '@poc-fapp-ui/react'

export default {
  title: 'Overlay/Modal/Modal',
  component: ModalComponent,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    overlay: {
      control: { type: 'boolean' },
      defaultValue: { summary: true },
    },
    defaultOpen: {
      control: false,
      defaultValue: { summary: false },
    },
    children: { table: { disable: true } },
  },
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Open modal</Button>
      </ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <Text size="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti esse id, reiciendis quos quas iusto, illum alias voluptate
            vel illo ad libero? Cupiditate sapiente suscipit deleniti labore
            inventore, consequuntur perferendis?
          </Text>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  )
}

export const Modal = Template.bind({})
Modal.args = {
  open: false,
  overlay: true,
}
