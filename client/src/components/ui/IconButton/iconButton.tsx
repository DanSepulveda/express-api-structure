import { type ReactNode } from 'react'
import { type VariantProps } from 'class-variance-authority'

import { type IconButtonAttributes } from '@components/ui/interfaces'
import { cn } from '@utils/classname'
import { iconButtonVariants } from './iconButton.variants'

interface IconButtonProps
  extends IconButtonAttributes,
    VariantProps<typeof iconButtonVariants> {
  tw?: string
  icon: ReactNode
  'aria-label': string
}

export const IconButton = ({
  icon,
  shape,
  size,
  tw,
  variant,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={cn(iconButtonVariants({ variant, shape, size }), tw)}
      {...props}
    >
      {icon}
    </button>
  )
}
