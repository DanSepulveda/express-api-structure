import type { ButtonHTMLAttributes } from 'react'
import type { ColorVariants, Sizes } from '@components/interfaces'
import classNames from 'classnames'
import { buttonStyles } from './styles'

// TODO: add icon feature

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: ColorVariants
  variant?: 'contained' | 'outlined'
  size?: Sizes
  radius?: 'none' | 'normal' | 'full'
  fullWidth?: boolean
}

export const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'md',
  radius = 'normal',
  fullWidth = false,
  type = 'submit',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        buttonStyles.base,
        buttonStyles.size[size],
        buttonStyles.radius[radius],
        buttonStyles.color[color][variant],
        { 'w-full': fullWidth },
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
