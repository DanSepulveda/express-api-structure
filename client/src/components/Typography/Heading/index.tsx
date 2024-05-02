import type {
  AlignProp,
  ColorProp,
  HTMLHeadingTags,
} from '@components/interfaces'
import { type HTMLAttributes, createElement } from 'react'
import classNames from 'classnames'
import headingStyles from './styles'
import { HEADING_DEFAULTS } from '@components/defaults'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HTMLHeadingTags
  align?: AlignProp
  color?: ColorProp
}

const Heading = ({
  children,
  as = HEADING_DEFAULTS.element,
  align = HEADING_DEFAULTS.align,
  color = HEADING_DEFAULTS.color,
  className,
  ...props
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
      ...props,
    },
    children,
  )
}

export default Heading
