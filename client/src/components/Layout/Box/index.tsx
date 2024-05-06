import type { HTMLContainerTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/defaults'
import { twMerge } from 'tailwind-merge'
import { useThemeContext } from '@utils/useThemeContext'

interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  variant?: string
  tw?: string
}

const Box = ({
  as = DEFAULT_ELEMENT.box,
  variant = 'default',
  tw,
  children,
  ...props
}: BoxProps) => {
  const { sxBox } = useThemeContext()

  return createElement(
    as,
    {
      className: twMerge(
        sxBox.base,
        sxBox.variants[variant] ?? sxBox.variants.default,
        tw,
      ),
      ...props,
    },
    children,
  )
}

export default Box
