import { ComponentProps } from 'react'
import { CloseCircle } from 'iconsax-react'
import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '@/styles'
import {
  ModalClose as ModalCloseCSS,
  ModalContent as ModalContentCSS,
  ModalOverlay as ModalOverlayCSS,
  ModalWrapper as ModalWrapperCSS,
} from './styles'

const StyledModalWrapper = styled(Dialog.Content, ModalWrapperCSS)
const StyledModalOverlay = styled(Dialog.Overlay, ModalOverlayCSS)
const StyledModalContent = styled('div', ModalContentCSS)
const StyledModalClose = styled('button', ModalCloseCSS)

export type ModalProps = Dialog.DialogProps & {
  overlay?: boolean
}

export type ModalWrapperProps = Dialog.DialogContentProps &
  ComponentProps<typeof StyledModalWrapper> & {
    width?: number
  }

export const Modal = ({ children, overlay = true, ...props }: ModalProps) => (
  <Dialog.Root {...props}>
    {overlay && <StyledModalOverlay />}
    {children}
  </Dialog.Root>
)

export const ModalWrapper = ({
  children,
  width = 700,
  ...props
}: ModalWrapperProps) => (
  <StyledModalWrapper css={{ $$maxWidth: `${width}px` }} {...props}>
    {children}
    <ModalClose asChild>
      <StyledModalClose aria-label="Close">
        <CloseCircle />
      </StyledModalClose>
    </ModalClose>
  </StyledModalWrapper>
)

export const ModalTrigger = Dialog.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = StyledModalContent
ModalContent.displayName = 'ModalContent'

export const ModalClose = Dialog.Close
ModalClose.displayName = 'ModalClose'
