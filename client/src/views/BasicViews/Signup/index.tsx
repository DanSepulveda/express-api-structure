import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import SignupForm from './SignupForm'
import Link from '@components/ui-components/Navigation/Link'
import styles from '@styles/global'
import { LOGIN_URL } from '@config/app'

const Signup = () => {
  const { sxHeading, sxLink, sxText } = styles

  return (
    <>
      <Heading tw={sxHeading.title + ' text-center mb-6'}>Signup</Heading>
      <SignupForm />
      <Text tw={sxText.small + ' text-center mt-4 font-medium'}>
        Already have one?{' '}
        <Link
          tw={sxLink.text}
          to={LOGIN_URL}
        >
          Please login
        </Link>
      </Text>
    </>
  )
}

export default Signup
