import { createElement } from 'react'
import { type VariantProps } from 'class-variance-authority'

import type { HTMLTextTags, TextAttributes } from '@components/ui/interfaces'
import { DEFAULT_ELEMENT } from '@components/ui/defaults'
import { cn } from '@utils/classname'
import { textVariants } from './text.variants'

interface TextProps extends TextAttributes, VariantProps<typeof textVariants> {
  as?: HTMLTextTags
  tw?: string
}

export const Text = ({
  align,
  as = DEFAULT_ELEMENT.text,
  children,
  variant,
  tw,
  ...props
}: TextProps) => {
  return createElement(
    as,
    {
      className: cn(textVariants({ variant, align }), tw),
      ...props,
    },
    children,
  )
}
