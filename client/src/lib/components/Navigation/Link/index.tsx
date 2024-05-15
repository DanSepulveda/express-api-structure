import type { LinkTypeProp } from '@lib/components/interfaces'
import { type LinkProps, Link as RouterLink, NavLink } from 'react-router-dom'

interface CustomLinkProps extends Omit<LinkProps, 'className'> {
  as?: LinkTypeProp
  tw?: string
}

const Link = ({ children, to, as = 'link', tw, ...props }: CustomLinkProps) => {
  switch (as) {
    case 'navlink':
      return (
        <NavLink
          to={to}
          className={tw}
          {...props}
        >
          {children}
        </NavLink>
      )
    case 'external':
      return (
        <a
          href={to.toString()}
          className={tw}
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
          className={tw}
          {...props}
        >
          {children}
        </RouterLink>
      )
  }
}

export default Link
