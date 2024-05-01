import type { ColorProp, HTMLHeadingTags } from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import headingStyles from './styles'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HTMLHeadingTags
  align?: 'left' | 'center' | 'right'
  color?: ColorProp
}

const Heading = ({
  children,
  as = 'h1',
  align = 'left',
  color = 'primary',
  className,
  ...rest
}: HeadingProps) => {
  return createElement(
    as,
    {
      className: classNames(
        headingStyles.base,
        headingStyles.size[as],
        headingStyles.align[align],
        headingStyles.color[color],
        className,
      ),
      ...rest,
    },
    children,
  )
}

export default Heading
