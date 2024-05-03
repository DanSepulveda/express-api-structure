import type { HTMLContainerTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import { CONTAINER_DEFAULTS } from '@components/defaults'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: HTMLContainerTags
  responsive?: boolean
}

const Container = ({
  children,
  as = CONTAINER_DEFAULTS.element,
  responsive = CONTAINER_DEFAULTS.responsive,
  className,
  ...props
}: ContainerProps) => {
  return createElement(
    as,
    {
      className: classNames(
        { 'w-full': !responsive },
        { 'container mx-auto': responsive },
        className,
      ),
      ...props,
    },
    children,
  )
}

export default Container
