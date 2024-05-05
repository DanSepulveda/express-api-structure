import { DEFAULT_ELEMENT } from '@components/defaults'
import type { HTMLHeadingTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HTMLHeadingTags
}

const Heading = ({
  children,
  as = DEFAULT_ELEMENT.heading,
  ...props
}: HeadingProps) => {
  return createElement(as, { ...props }, children)
}

export default Heading
