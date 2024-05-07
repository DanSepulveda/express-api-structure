import { LinkTypeProp } from '@components/interfaces'
import { useThemeContext } from '@utils/useThemeContext'
import { NavLink, LinkProps, Link as RouterLink } from 'react-router-dom'
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
  variant = 'default',
  tw,
  ...props
}: CustomLinkProps) => {
  const { sxLink } = useThemeContext()
  const className = twMerge(
    sxLink.variants[variant] ?? sxLink.variants.default,
    tw,
  )

  switch (as) {
    case 'navlink':
      return (
        <NavLink
          {...props}
          to={to}
          className={className}
        >
          {children}
        </NavLink>
      )
    case 'external':
      return (
        <a
          {...props}
          href={to.toString()}
          className={className}
        >
          {children}
        </a>
      )
    default:
      return (
        <RouterLink
          {...props}
          to={to}
          className={className}
        >
          {children}
        </RouterLink>
      )
  }
}

export default Link
