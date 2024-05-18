// * Third-party libraries
import type { ReactNode } from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
// * Custom components
import Container from '@lib/components/Layout/Container'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
import Link from '@lib/components/Navigation/Link'
import { AFTER_LOGIN_URL } from '@config/app'

interface ProtectedRouteProps {
  permission: string | null
  children: ReactNode
}

const ProtectedRoute = ({ permission, children }: ProtectedRouteProps) => {
  // TODO: get permissions from DB when logging in
  const permissions: string[] = ['dashboard', 'records']

  if (permission === null || permissions.includes(permission)) {
    return children
  }

  return (
    <Container tw="h-full col-center-center">
      <AiOutlineWarning className="text-yellow-500 text-6xl mb-4" />
      <Heading tw="heading-subtitle mb-4">401 - Unauthorized</Heading>
      <Text tw="text-large mb-8">
        You do not have the necessary permissions to access this page.
      </Text>
      <Link
        to={AFTER_LOGIN_URL}
        tw="link"
      >
        Return to Dashboard
      </Link>
    </Container>
  )
}

export default ProtectedRoute
