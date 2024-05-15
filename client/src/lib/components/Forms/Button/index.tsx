import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import getDisabledStatus from './getDisabledStatus'

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
      className={'flex justify-center items-center gap-2 ' + tw}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
}

export default Button
