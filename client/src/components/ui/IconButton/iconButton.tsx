import { type ReactNode } from 'react'
import { type VariantProps } from 'class-variance-authority'

import { type IconButtonAttributes } from '@components/ui/interfaces'
import { cn } from '@utils/classname'
import { iconButtonVariants } from './iconButton.variants'

interface IconButtonProps
  extends IconButtonAttributes,
    VariantProps<typeof iconButtonVariants> {
  icon: ReactNode
  'aria-label': string
}

export const IconButton = ({
  className,
  color,
  icon,
  shape,
  size,
  variant,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        iconButtonVariants({ color, variant, shape, size }),
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
