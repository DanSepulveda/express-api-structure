import { TEXT_DEFAULTS } from '@components/defaults'
import type { HTMLTextTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: HTMLTextTags
}

const Text = ({
  as = TEXT_DEFAULTS.element,
  children,
  ...props
}: TextProps) => {
  return createElement(
    as,
    {
      ...props,
    },
    children,
  )
}

export default Text
