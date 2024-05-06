import { DEFAULT_ELEMENT } from '@components/defaults'
import type { HTMLHeadingTags } from '@components/interfaces'
import { useThemeContext } from '@utils/useThemeContext'
import { type HTMLAttributes, createElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'> {
  as?: HTMLHeadingTags
  variant?: string
  tw?: string
}

const Heading = ({
  children,
  as = DEFAULT_ELEMENT.heading,
  variant = 'default',
  tw,
  ...props
}: HeadingProps) => {
  const { sxHeading } = useThemeContext()
  return createElement(
    as,
    {
      className: twMerge(
        sxHeading.base,
        sxHeading.variants[variant] ?? sxHeading.variants.default,
        tw,
      ),
      ...props,
    },
    children,
  )
}

export default Heading
