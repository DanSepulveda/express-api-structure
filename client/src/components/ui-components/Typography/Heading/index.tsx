import type { HTMLHeadingTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'
import { useThemeContext } from '@utils/useThemeContext'
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
  variant = 'title',
  tw,
  ...props
}: HeadingProps) => {
  const { sxHeading } = useThemeContext()

  return createElement(
    as,
    {
      ...props,
      className: twMerge(
        sxHeading.base,
        sxHeading.variants[variant] ?? sxHeading.variants.primary,
        tw,
      ),
    },
    children,
  )
}

export default Heading
