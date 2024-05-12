import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import Stack from '@components/ui-components/Layout/Stack'
import Link from '@components/ui-components/Navigation/Link'
import Text from '@components/ui-components/Typography/Text'

interface IconLinkProps extends Omit<LinkProps, 'className'> {
  icon: ReactNode
  text: string
  to: string
  position: string
  twContainer?: string
  twLink?: string
  twIcon?: string
  twText?: string
}

const IconLink = ({
  icon,
  text,
  to,
  position,
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
      tw={twLink}
      data-position={position}
      {...props}
    >
      <Stack tw={twContainer}>
        <Text
          as="span"
          tw={twIcon}
        >
          {icon}
        </Text>
        <Text
          as="span"
          tw={twText}
        >
          {text}
        </Text>
      </Stack>
    </Link>
  )
}

export default IconLink
