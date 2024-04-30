import type { ButtonHTMLAttributes } from 'react'
import type { ColorProp, SizeProp } from '@components/interfaces'
import classNames from 'classnames'
import buttonStyles from './styles'

// TODO: icon button feature
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: ColorProp
  variant?: 'contained' | 'outlined'
  size?: SizeProp
  radius?: 'none' | 'normal' | 'full'
  fullWidth?: boolean
}

const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'md',
  radius = 'normal',
  fullWidth = false,
  type = 'submit',
  className,
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
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
