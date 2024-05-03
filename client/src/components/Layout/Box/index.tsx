import type { HTMLContainerTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import { BOX_DEFAULTS } from '@components/defaults'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: HTMLContainerTags
  blank?: boolean
}

const Box = ({
  as = BOX_DEFAULTS.element,
  blank = BOX_DEFAULTS.blank,
  className,
  children,
  ...props
}: BoxProps) => {
  return createElement(
    as,
    {
      className: classNames(
        {
          'bg-white px-4 py-10 shadow-md rounded-lg sm:px-10 max-w-max': !blank,
        },
        className,
      ),
      ...props,
    },
    children,
  )
}

export default Box
