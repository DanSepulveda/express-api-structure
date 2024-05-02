import type { ButtonHTMLAttributes } from 'react'
import type { ColorProp, SizeProp } from '@components/interfaces'
import classNames from 'classnames'
import buttonStyles from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorProp
  variant?: 'contained' | 'outlined'
  size?: SizeProp
  radius?: 'none' | 'normal' | 'full'
  fullWidth?: boolean
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'md',
  radius = 'normal',
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = 'submit',
  className,
  ...props
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
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {leftIcon ? leftIcon : null}
        {children}
        {rightIcon ? rightIcon : null}
      </div>
    </button>
  )
}

export default Button
