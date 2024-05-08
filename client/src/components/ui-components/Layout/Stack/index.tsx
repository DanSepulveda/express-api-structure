import type { HTMLContainerTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'
import { useThemeContext } from '@utils/useThemeContext'
import { twMerge } from 'tailwind-merge'

export interface StackProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  variant?: string
  tw?: string
}

const Stack = ({
  children,
  as = DEFAULT_ELEMENT.stack,
  variant = 'row',
  tw,
  ...props
}: StackProps) => {
  const { sxStack } = useThemeContext()

  return createElement(
    as,
    {
      ...props,
      className: twMerge(
        sxStack.base,
        sxStack.variants[variant] ?? sxStack.variants.row,
        tw,
      ),
    },
    children,
  )
}

export default Stack
