// * Custom components
import Link from '@lib/components/Navigation/Link'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
import SignupForm from './SignupForm'
// * Config
import { LOGIN_URL } from '@config/app'

const Signup = () => {
  return (
    <>
      <Heading tw="heading-title text-center mb-6">Signup</Heading>
      <SignupForm />
      <Text tw="text-small text-center mt-4 font-medium">
        Already have one?{' '}
        <Link
          tw="link"
          to={LOGIN_URL}
        >
          Please login
        </Link>
      </Text>
    </>
  )
}

export default Signup
