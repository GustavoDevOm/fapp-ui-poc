var l=Object.defineProperty;var a=(o,n)=>l(o,"name",{value:n,configurable:!0});import{M as t,a as s,B as i,b as d,c as p,T as u}from"./index.5055acb9.js";import{a as c,j as e}from"./jsx-runtime.404cc3c2.js";import{ap as m}from"./iframe.54a927e4.js";import"./index.e3c2a9d1.js";import"./index.183d7f69.js";const v={parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api'
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
`,locationsMap:{modal:{startLoc:{col:36,line:34},endLoc:{col:1,line:56},startBody:{col:36,line:34},endBody:{col:1,line:56}}}}},title:"Overlay/Modal/Modal",component:t,argTypes:{open:{control:{type:"boolean"},defaultValue:{summary:!1}},overlay:{control:{type:"boolean"},defaultValue:{summary:!0}},defaultOpen:{control:!1,defaultValue:{summary:!1}},children:{table:{disable:!0}}}},M=a(o=>{const[,n]=m();return c(t,{...o,onOpenChange:r=>n({open:r}),children:[e(s,{asChild:!0,children:e(i,{children:"Open modal"})}),e(d,{children:e(p,{children:e(u,{size:"lg",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse id, reiciendis quos quas iusto, illum alias voluptate vel illo ad libero? Cupiditate sapiente suscipit deleniti labore inventore, consequuntur perferendis?"})})})]})},"Template"),g=M.bind({});g.args={open:!1,overlay:!0};const x=["Modal"];export{g as Modal,x as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories.23f6693c.js.map
