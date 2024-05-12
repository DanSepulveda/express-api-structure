import type { HTMLContainerTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'

export interface StackProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  tw?: string
}

const Stack = ({
  children,
  as = DEFAULT_ELEMENT.stack,
  tw,
  ...props
}: StackProps) => {
  return createElement(
    as,
    {
      ...props,
      className: tw,
    },
    children,
  )
}

export default Stack
