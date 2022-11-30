var p=Object.defineProperty;var a=(o,e)=>p(o,"name",{value:e,configurable:!0});import{b as r,M as s,a as l,B as d,c as i,T as m}from"./index.5055acb9.js";import{a as c,j as n}from"./jsx-runtime.404cc3c2.js";import{ap as M}from"./iframe.54a927e4.js";import"./index.e3c2a9d1.js";import"./index.183d7f69.js";const f={parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api'
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
`,locationsMap:{"modal-wrapper":{startLoc:{col:43,line:26},endLoc:{col:1,line:45},startBody:{col:43,line:26},endBody:{col:1,line:45}}}}},title:"Overlay/Modal/ModalWrapper",component:r,argTypes:{width:{control:{type:"range",min:200,max:1280,step:10},defaultValue:{summary:"700"}},children:{table:{disable:!0}}}},u=a(o=>{const[,e]=M();return c(s,{onOpenChange:t=>e({open:t}),children:[n(l,{asChild:!0,children:n(d,{children:"Open modal"})}),n(r,{...o,children:n(i,{children:n(m,{as:"span",size:"lg",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"})})})]})},"Template"),g=u.bind({});g.args={width:700};const b=["ModalWrapper"];export{g as ModalWrapper,b as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories.174187b7.js.map
