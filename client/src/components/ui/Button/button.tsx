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
}

export const Button = ({
  children,
  className,
  color,
  disabled = false,
  fullWidth,
  leftIcon,
  rightIcon,
  size,
  type = 'submit',
  variant,
  ...props
}: ButtonProps) => {
  const context = useFormContext()

  return (
    <button
      type={type}
      disabled={isDisabled(context, disabled)}
      className={cn(
        buttonVariants({ color, variant, size, fullWidth }),
        className,
      )}
      {...props}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
}
