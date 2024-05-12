import type { HTMLTextTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'

interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className'> {
  as?: HTMLTextTags
  tw?: string
}

const Text = ({
  children,
  as = DEFAULT_ELEMENT.text,
  tw,
  ...props
}: TextProps) => {
  return createElement(
    as,
    {
      ...props,
      className: tw,
    },
    children,
  )
}

export default Text
