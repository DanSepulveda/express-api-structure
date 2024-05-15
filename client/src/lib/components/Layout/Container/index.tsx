import type { HTMLContainerTags } from '@lib/components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@lib/components/defaults'

interface ContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  as?: HTMLContainerTags
  tw?: string
}

const Container = ({
  children,
  as = DEFAULT_ELEMENT.container,
  tw,
  ...props
}: ContainerProps) => {
  return createElement(
    as,
    {
      ...props,
      className: tw,
    },
    children,
  )
}

export default Container
