import { createElement } from 'react'
import { type VariantProps } from 'class-variance-authority'

import type {
  ContainerAttributes,
  HTMLContainerTags,
} from '@components/ui/interfaces'
import { DEFAULT_ELEMENT } from '@components/ui/defaults'
import { cn } from '@utils/classname'
import { containerVariants } from './container.variants'

interface ContainerProps
  extends ContainerAttributes,
    VariantProps<typeof containerVariants> {
  as?: HTMLContainerTags
}

export const Container = ({
  as = DEFAULT_ELEMENT.container,
  children,
  className,
  variant,
  ...props
}: ContainerProps) => {
  return createElement(
    as,
    {
      ...props,
      className: cn(containerVariants({ variant }), className),
    },
    children,
  )
}
