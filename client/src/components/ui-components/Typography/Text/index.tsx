import type { HTMLTextTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'
import { useThemeContext } from '@utils/useThemeContext'
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
  variant = 'normal',
  tw,
  ...props
}: TextProps) => {
  const { sxText } = useThemeContext()

  return createElement(
    as,
    {
      ...props,
      className: twMerge(
        sxText.base,
        sxText.variants[variant] ?? sxText.variants.normal,
        tw,
      ),
    },
    children,
  )
}

export default Text
