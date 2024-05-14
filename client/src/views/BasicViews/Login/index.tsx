import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import LoginForm from './LoginForm'
import Link from '@components/ui-components/Navigation/Link'
import styles from '@styles/global'
import { FORGOT_PWD_URL, SIGNUP_URL } from '@config/app'

const Login = () => {
  const { sxHeading, sxLink, sxText } = styles

  return (
    <>
      <Heading tw={sxHeading.title + ' text-center mb-6'}>Login</Heading>
      <LoginForm />
      <Text tw="mt-4 text-center text-sm">
        <Link
          to={FORGOT_PWD_URL}
          tw={sxLink.text}
        >
          Forgot password?
        </Link>
      </Text>
      <Text tw={sxText.small + ' text-center mt-4 font-medium'}>
        New to our platform?{' '}
        <Link
          to={SIGNUP_URL}
          tw={sxLink.text}
        >
          Create an account
        </Link>
      </Text>
    </>
  )
}

export default Login
