import { type ReactNode } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { useFormContext } from 'react-hook-form'

import { type ButtonAttributes } from '@components/ui/interfaces'
import { cn } from '@utils/classname'
import { isDisabled } from './button.utils'
import { buttonVariants } from './button.variants'

interface ButtonProps
  extends ButtonAttributes,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  tw?: string
}

export const Button = ({
  children,
  disabled = false,
  fullWidth,
  leftIcon,
  rightIcon,
  size,
  type = 'submit',
  tw,
  variant,
  ...props
}: ButtonProps) => {
  const context = useFormContext()

  return (
    <button
      type={type}
      disabled={isDisabled(context, disabled)}
      className={cn(buttonVariants({ variant, size, fullWidth }), tw)}
      {...props}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
}
