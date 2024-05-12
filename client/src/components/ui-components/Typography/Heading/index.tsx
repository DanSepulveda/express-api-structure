import type { HTMLHeadingTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'

interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'> {
  as?: HTMLHeadingTags
  tw?: string
}

const Heading = ({
  children,
  as = DEFAULT_ELEMENT.heading,
  tw,
  ...props
}: HeadingProps) => {
  return createElement(
    as,
    {
      ...props,
      className: tw,
    },
    children,
  )
}

export default Heading
