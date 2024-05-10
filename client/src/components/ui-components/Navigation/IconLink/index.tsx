import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { useThemeContext } from '@utils/useThemeContext'
import Stack from '@components/ui-components/Layout/Stack'
import Link from '@components/ui-components/Navigation/Link'
import Text from '@components/ui-components/Typography/Text'

interface IconLinkProps extends Omit<LinkProps, 'className'> {
  icon: ReactNode
  text: string
  to: string
  variant?: string
  twContainer?: string
  twLink?: string
  twIcon?: string
  twText?: string
}

const IconLink = ({
  icon,
  text,
  to,
  variant = 'drawer',
  twContainer,
  twLink,
  twIcon,
  twText,
  ...props
}: IconLinkProps) => {
  const { sxIconLink } = useThemeContext()
  const styles = sxIconLink.variants[variant] ?? sxIconLink.variants.drawer

  return (
    <Link
      to={to}
      as="navlink"
      variant="unset"
      tw={twMerge(styles.link, twLink)}
      data-position={variant}
      {...props}
    >
      <Stack tw={twMerge(styles.container, twContainer)}>
        <Text
          as="span"
          variant="unset"
          tw={twMerge(styles.icon, twIcon)}
        >
          {icon}
        </Text>
        <Text
          as="span"
          variant="unset"
          tw={twMerge(styles.text, twText)}
        >
          {text}
        </Text>
      </Stack>
    </Link>
  )
}

export default IconLink
