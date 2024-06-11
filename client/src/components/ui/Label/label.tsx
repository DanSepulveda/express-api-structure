import { type VariantProps } from 'class-variance-authority'

import { type LabelAttributes } from '@components/ui/interfaces'
import Text from '@components/ui/Text'
import { cn } from '@utils/classname'
import { labelVariants } from './label.variants'

export interface LabelProps
  extends LabelAttributes,
    VariantProps<typeof labelVariants> {
  label: string
  decorator?: string
}

export const Label = ({
  className,
  decorator,
  decoratorVariant,
  label,
  variant,
  ...props
}: LabelProps) => {
  return (
    <label
      className={cn(labelVariants({ variant, decoratorVariant }), className)}
      {...props}
    >
      {label}
      {decorator ? <Text as="span">{' ' + decorator}</Text> : null}
    </label>
  )
}
