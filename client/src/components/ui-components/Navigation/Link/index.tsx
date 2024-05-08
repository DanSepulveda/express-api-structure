import type { LinkTypeProp } from '@components/ui-components/interfaces'
import { type LinkProps, Link as RouterLink, NavLink } from 'react-router-dom'
import { useThemeContext } from '@utils/useThemeContext'
import { twMerge } from 'tailwind-merge'

interface CustomLinkProps extends Omit<LinkProps, 'className'> {
  as?: LinkTypeProp
  variant?: string
  tw?: string
}

const Link = ({
  children,
  to,
  as = 'link',
  variant = 'text',
  tw,
  ...props
}: CustomLinkProps) => {
  const { sxLink } = useThemeContext()
  const className = twMerge(
    sxLink.variants[variant] ?? sxLink.variants.text,
    tw,
  )

  switch (as) {
    case 'navlink':
      return (
        <NavLink
          to={to}
          className={className}
          {...props}
        >
          {children}
        </NavLink>
      )
    case 'external':
      return (
        <a
          href={to.toString()}
          className={className}
          target="_blank"
          {...props}
        >
          {children}
        </a>
      )
    default:
      return (
        <RouterLink
          to={to}
          className={className}
          {...props}
        >
          {children}
        </RouterLink>
      )
  }
}

export default Link
