import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import Stack from '@components/ui-components/Layout/Stack'
import Link from '@components/ui-components/Navigation/Link'
import Text from '@components/ui-components/Typography/Text'

interface TW {
  twContainer: string
  twLink: string
  twIcon: string
  twText: string
}

interface IconLinkProps extends Omit<LinkProps, 'className'> {
  icon: ReactNode
  text: string
  to: string
  position?: string
  tw?: TW
  twContainer?: string
  twLink?: string
  twIcon?: string
  twText?: string
}

const IconLink = ({
  icon,
  text,
  to,
  position = 'drawer',
  tw,
  twContainer,
  twLink,
  twIcon,
  twText,
  ...props
}: IconLinkProps) => {
  return (
    <Link
      to={to}
      as="navlink"
      tw={twMerge(tw?.twLink, twLink)}
      data-position={position}
      {...props}
    >
      <Stack tw={twMerge(tw?.twContainer, twContainer)}>
        <Text
          as="span"
          tw={twMerge(tw?.twIcon, twIcon)}
        >
          {icon}
        </Text>
        <Text
          as="span"
          tw={twMerge(tw?.twText, twText)}
        >
          {text}
        </Text>
      </Stack>
    </Link>
  )
}

export default IconLink
