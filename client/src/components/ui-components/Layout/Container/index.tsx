import type { HTMLContainerTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'
import { useThemeContext } from '@utils/useThemeContext'
import { twMerge } from 'tailwind-merge'

interface ContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  variant?: string
  tw?: string
}

const Container = ({
  children,
  as = DEFAULT_ELEMENT.container,
  variant = 'full',
  tw,
  ...props
}: ContainerProps) => {
  const { sxContainer } = useThemeContext()

  return createElement(
    as,
    {
      ...props,
      className: twMerge(
        sxContainer.base,
        sxContainer.variants[variant] ?? sxContainer.variants.full,
        tw,
      ),
    },
    children,
  )
}

export default Container
