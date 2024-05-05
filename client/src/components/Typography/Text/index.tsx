import { DEFAULT_ELEMENT } from '@components/defaults'
import type { HTMLTextTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: HTMLTextTags
}

const Text = ({ children, as = DEFAULT_ELEMENT.text, ...props }: TextProps) => {
  return createElement(as, { ...props }, children)
}

export default Text
