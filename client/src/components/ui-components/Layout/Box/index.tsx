import type { HTMLContainerTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { useThemeContext } from '@utils/useThemeContext'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'
import { twMerge } from 'tailwind-merge'

interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  variant?: string
  tw?: string
}

const Box = ({
  as = DEFAULT_ELEMENT.box,
  variant = 'white',
  tw,
  children,
  ...props
}: BoxProps) => {
  const { sxBox } = useThemeContext()

  return createElement(
    as,
    {
      ...props,
      className: twMerge(
        sxBox.base,
        sxBox.variants[variant] ?? sxBox.variants.white,
        tw,
      ),
    },
    children,
  )
}

export default Box
