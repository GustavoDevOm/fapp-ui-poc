import { css, keyframes } from '@/styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
  },
})

const contentShowMobile = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(0, 75%, 0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(0, -10% 0)',
  },
})

const contentHide = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
})

const contentHideMobile = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate3d(0, -10% 0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate3d(0, 75%, 0)',
  },
})

export const ModalWrapper = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(-50%, -50%, 0)',
  width: '90vw',
  maxWidth: '$$maxWidth',
  backgroundColor: '$white',
  maxHeight: '90vh',
  overflowY: 'auto',
  zIndex: 2,
  borderRadius: 8,
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2',

  '&focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${contentShow} 0.3s ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${contentHide} 0.2s ease-out`,
  },

  '@sm': {
    transform: 'inherit',
    top: 'inherit',
    left: 'inherit',
    width: 'inherit',
    maxWidth: 'inherit',
    borderRadius: '8px 8px 0 0',
    bottom: 0,

    '&[data-state=open]': {
      animation: `${contentShowMobile} 0.3s ease-out`,
    },
    '&[data-state=closed]': {
      animation: `${contentHideMobile} 0.2s ease-out`,
    },
  },
})

export const ModalOverlay = css({
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  inset: 0,
  zIndex: 1,

  '&[data-state=open]': {
    animation: `${overlayShow} 0.2s ease-in`,
  },
  '&[data-state=closed]': {
    animation: `${overlayHide} 0.3s ease-in`,
  },
})

export const ModalContent = css({
  p: '48px 32px 32px',

  '@sm': {
    p: '32px 16px 16px',
  },
})

export const ModalClose = css({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 24,
  width: 24,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$grey3',
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',

  '&:hover': { color: '$grey4' },
  '&:active': { color: '$grey2' },
})
