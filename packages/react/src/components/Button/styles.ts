import { css } from '@/styles'

export const Button = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',
  border: 0,

  fontFamily: '$default',
  fontWeight: '$medium',

  variants: {
    colorScheme: {
      primary: {},
      success: {},
      error: {},
    },
    variant: {
      contained: {},
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid',
      },
      link: {
        backgroundColor: 'transparent',
      },
    },
    size: {
      small: {
        p: '6px 12px',
        borderRadius: 2,
        fontSize: '$xxs',
      },
      medium: {
        p: '8px 16px',
        borderRadius: '$xs',
        fontSize: '$xs',
      },
      large: {
        p: '12px 24px',
        borderRadius: '$md',
        fontSize: '$md',
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        color: '$grey3',
        cursor: 'not-allowed',
      },
      false: {
        cursor: 'pointer',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'contained',
      disabled: true,
      css: {
        backgroundColor: '$grey6',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
      },
    },
    {
      variant: 'contained',
      disabled: false,
      css: {
        color: '$white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '$green3',
        },
        '&:active': {
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: '$green1',
        },
      },
    },
    {
      variant: 'outlined',
      disabled: true,
      css: {
        borderColor: '$grey6',
      },
    },
    {
      variant: 'outlined',
      disabled: false,
      css: {
        '&:hover': {
          color: '$green3',
        },
        '&:active': {
          color: '$green1',
        },
      },
    },
    {
      variant: 'link',
      disabled: false,
      css: {
        '&:hover': {
          color: '$green3',
        },
        '&:active': {
          color: '$green1',
        },
      },
    },
    {
      colorScheme: 'primary',
      variant: 'contained',
      disabled: false,
      css: {
        backgroundColor: '$green2',
      },
    },
    {
      colorScheme: 'primary',
      variant: 'outlined',
      disabled: false,
      css: {
        color: '$green2',
      },
    },
    {
      colorScheme: 'primary',
      variant: 'link',
      disabled: false,
      css: {
        color: '$green2',
      },
    },
    {
      colorScheme: 'success',
      variant: 'contained',
      disabled: false,
      css: {
        backgroundColor: '$success',
      },
    },
    {
      colorScheme: 'success',
      variant: 'outlined',
      disabled: false,
      css: {
        color: '$success',
      },
    },
    {
      colorScheme: 'success',
      variant: 'link',
      disabled: false,
      css: {
        color: '$success',
      },
    },
    {
      colorScheme: 'error',
      variant: 'contained',
      disabled: false,
      css: {
        backgroundColor: '$error',
      },
    },
    {
      colorScheme: 'error',
      variant: 'outlined',
      disabled: false,
      css: {
        color: '$error',
      },
    },
    {
      colorScheme: 'error',
      variant: 'link',
      disabled: false,
      css: {
        color: '$error',
      },
    },
    {
      colorScheme: 'primary',
      variant: 'contained',
      disabled: false,
      css: {
        backgroundColor: '$green2',
      },
    },
    {
      variant: 'outlined',
      size: 'small',
      css: {
        p: '5px 11px',
      },
    },
    {
      variant: 'outlined',
      size: 'medium',
      css: {
        p: '7px 15px',
      },
    },
    {
      variant: 'outlined',
      size: 'large',
      css: {
        p: '11px 23px',
      },
    },
  ],
  defaultVariants: {
    colorScheme: 'primary',
    variant: 'contained',
    size: 'medium',
    full: false,
    disabled: false,
  },
})
