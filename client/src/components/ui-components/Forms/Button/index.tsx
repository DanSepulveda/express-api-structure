import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import getDisabledStatus from './getDisabledStatus'
import { useThemeContext } from '@utils/useThemeContext'
import { twMerge } from 'tailwind-merge'
import Stack from '@components/ui-components/Layout/Stack'

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
  variant = 'primary',
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
        sxButton.variants[variant] ?? sxButton.variants.primary,
        tw,
      )}
    >
      <Stack tw="gap-2">
        {leftIcon ? leftIcon : null}
        {children}
        {rightIcon ? rightIcon : null}
      </Stack>
    </button>
  )
}

export default Button
