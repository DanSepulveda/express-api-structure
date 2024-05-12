import type { HTMLContainerTags } from '@components/ui-components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import { DEFAULT_ELEMENT } from '@components/ui-components/defaults'

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
