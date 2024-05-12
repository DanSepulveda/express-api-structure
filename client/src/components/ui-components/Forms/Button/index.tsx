import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import getDisabledStatus from './getDisabledStatus'
import Stack from '@components/ui-components/Layout/Stack'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  tw?: string
}

const Button = ({
  children,
  type = 'submit',
  disabled = false,
  tw,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const formContext = useFormContext()
  const disabledStatus = getDisabledStatus(formContext, disabled)

  return (
    <button
      {...props}
      type={type}
      disabled={disabledStatus}
      className={tw}
    >
      <Stack tw="flex flex-row justify-center items-center gap-2">
        {leftIcon ? leftIcon : null}
        {children}
        {rightIcon ? rightIcon : null}
      </Stack>
    </button>
  )
}

export default Button
