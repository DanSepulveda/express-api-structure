import { createElement } from 'react'
import { type VariantProps } from 'class-variance-authority'

import type {
  HeadingAttributes,
  HTMLHeadingTags,
} from '@components/ui/interfaces'
import { DEFAULT_ELEMENT } from '@components/ui/defaults'
import { cn } from '@utils/classname'
import { headingVariants } from './heading.variants'

interface HeadingProps
  extends HeadingAttributes,
    VariantProps<typeof headingVariants> {
  as?: HTMLHeadingTags
  tw?: string
}

export const Heading = ({
  align,
  as = DEFAULT_ELEMENT.heading,
  children,
  tw,
  variant,
  ...props
}: HeadingProps) => {
  return createElement(
    as,
    {
      className: cn(headingVariants({ variant, align }), tw),
      ...props,
    },
    children,
  )
}
