import type { HTMLTextTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: HTMLTextTags
}

const Text = ({ as = 'p', children, ...rest }: TextProps) => {
  return createElement(
    as,
    {
      ...rest,
    },
    children,
  )
}

export default Text
