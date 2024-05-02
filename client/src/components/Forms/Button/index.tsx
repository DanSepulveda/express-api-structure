import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type {
  ButtonVariantProp,
  ColorProp,
  RadiusProp,
  SizeProp,
} from '@components/interfaces'
import classNames from 'classnames'
import buttonStyles from './styles'
import { BUTTON_DEFAULTS } from '@components/defaults'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorProp
  variant?: ButtonVariantProp
  size?: SizeProp
  radius?: RadiusProp
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Button = ({
  children,
  color = BUTTON_DEFAULTS.color,
  variant = BUTTON_DEFAULTS.variant,
  size = BUTTON_DEFAULTS.size,
  radius = BUTTON_DEFAULTS.radius,
  fullWidth = BUTTON_DEFAULTS.fullWidth,
  leftIcon,
  rightIcon,
  type = BUTTON_DEFAULTS.type,
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
