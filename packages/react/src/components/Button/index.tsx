import { ButtonHTMLAttributes, ElementRef, forwardRef } from 'react'
import { Icon } from 'iconsax-react'

import { styled } from '@/styles'
import { Button as ButtonCSS } from './styles'

const StyledButton = styled('button', ButtonCSS)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  colorScheme?: 'primary' | 'success' | 'error'
  variant?: 'contained' | 'outlined' | 'link'
  size?: 'small' | 'medium' | 'large'
  leftIcon?: Icon
  rightIcon?: Icon
  full?: boolean
}

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  (
    {
      colorScheme = 'primary',
      variant = 'contained',
      size = 'medium',
      full,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      disabled,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const iconSize = size === 'small' ? 10 : size === 'medium' ? 12 : 16
    const iconVariant = variant === 'contained' ? 'Bold' : 'Outline'

    return (
      <StyledButton
        colorScheme={colorScheme}
        variant={variant}
        size={size}
        full={full}
        disabled={disabled}
        ref={forwardedRef}
        {...props}
      >
        {LeftIcon && <LeftIcon size={iconSize} variant={iconVariant} />}
        <span>{children}</span>
        {RightIcon && <RightIcon size={iconSize} variant={iconVariant} />}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
