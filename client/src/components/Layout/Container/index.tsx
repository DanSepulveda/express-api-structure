import { DEFAULT_ELEMENT } from '@components/defaults'
import type { HTMLContainerTags } from '@components/interfaces'
import { useThemeContext } from '@utils/useThemeContext'
import { type HTMLAttributes, createElement } from 'react'
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
  variant = 'default',
  tw,
  ...props
}: ContainerProps) => {
  const { sxContainer } = useThemeContext()

  return createElement(
    as,
    {
      className: twMerge(
        sxContainer.base,
        sxContainer.variants[variant] ?? sxContainer.variants.default,
        tw,
      ),
      ...props,
    },
    children,
  )
}

export default Container
