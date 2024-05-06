import { DEFAULT_ELEMENT } from '@components/defaults'
import type { HTMLTextTags } from '@components/interfaces'
import { useThemeContext } from '@utils/useThemeContext'
import { type HTMLAttributes, createElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className'> {
  as?: HTMLTextTags
  variant?: string
  tw?: string
}

const Text = ({
  children,
  as = DEFAULT_ELEMENT.text,
  variant = 'default',
  tw,
  ...props
}: TextProps) => {
  const { sxText } = useThemeContext()
  return createElement(
    as,
    {
      className: twMerge(
        sxText.base,
        sxText.variants[variant] ?? sxText.variants.default,
        tw,
      ),
      ...props,
    },
    children,
  )
}

export default Text
