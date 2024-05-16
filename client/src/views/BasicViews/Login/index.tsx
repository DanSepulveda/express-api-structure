// * Custom components
import Link from '@lib/components/Navigation/Link'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
import LoginForm from './LoginForm'
// * Config
import { FORGOT_PWD_URL, SIGNUP_URL } from '@config/app'

const Login = () => {
  return (
    <>
      <Heading tw="heading-title text-center mb-6">Login</Heading>
      <LoginForm />
      <Text tw="text-small mt-4 text-center">
        <Link
          to={FORGOT_PWD_URL}
          tw="link"
        >
          Forgot password?
        </Link>
      </Text>
      <Text tw="text-small text-center mt-4 font-medium">
        New to our platform?{' '}
        <Link
          to={SIGNUP_URL}
          tw="link"
        >
          Create an account
        </Link>
      </Text>
    </>
  )
}

export default Login
