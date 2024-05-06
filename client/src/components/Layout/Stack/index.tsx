import type { HTMLContainerTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/defaults'
import { twMerge } from 'tailwind-merge'
import { useThemeContext } from '@utils/useThemeContext'

export interface StackProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  variant?: string
  tw?: string
}

const Stack = ({
  children,
  as = DEFAULT_ELEMENT.stack,
  variant = 'default',
  tw,
  ...props
}: StackProps) => {
  const { sxStack } = useThemeContext()

  return createElement(
    as,
    {
      className: twMerge(
        sxStack.base,
        sxStack.variants[variant] ?? sxStack.variants.default,
        tw,
      ),
      ...props,
    },
    children,
  )
}

export default Stack
