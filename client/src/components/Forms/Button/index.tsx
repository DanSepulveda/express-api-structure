import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import getDisabledStatus from './getDisabledStatus'
import { useThemeContext } from '@utils/useThemeContext'
import { twMerge } from 'tailwind-merge'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: string
  tw?: string
}

const Button = ({
  children,
  type = 'submit',
  disabled = false,
  tw,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: ButtonProps) => {
  const { sxButton } = useThemeContext()
  const formContext = useFormContext()
  const disabledStatus = getDisabledStatus(formContext, disabled)

  return (
    <button
      {...props}
      type={type}
      disabled={disabledStatus}
      className={twMerge(
        sxButton.base,
        sxButton.variants[variant] ?? sxButton.variants.default,
        tw,
      )}
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
