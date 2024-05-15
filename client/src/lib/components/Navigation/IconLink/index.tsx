import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import Container from '@lib/components/Layout/Container'
import Link from '@lib/components/Navigation/Link'
import Text from '@lib/components/Typography/Text'

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
      <Container tw={twContainer}>
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
      </Container>
    </Link>
  )
}

export default IconLink
