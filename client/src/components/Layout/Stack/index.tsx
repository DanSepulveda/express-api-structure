import type {
  FlexAlignProp,
  FlexDirectionProp,
  FlexJustifyProp,
  HTMLContainerTags,
} from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import { STACK_DEFAULTS } from '@components/defaults'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  as?: HTMLContainerTags
  direction?: FlexDirectionProp
  justify?: FlexJustifyProp
  align?: FlexAlignProp
}

const Stack = ({
  children,
  className,
  as = STACK_DEFAULTS.element,
  direction = STACK_DEFAULTS.direction,
  justify = STACK_DEFAULTS.justify,
  align = STACK_DEFAULTS.align,
  ...props
}: StackProps) => {
  return createElement(
    as,
    {
      className: classNames(
        'w-full flex',
        { [`flex-${direction}`]: true },
        { [`justify-${justify}`]: true },
        { [`items-${align}`]: true },
        className,
      ),
      ...props,
    },
    children,
  )
}

export default Stack
