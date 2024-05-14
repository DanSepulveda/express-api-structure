import styles from '@styles/global'
import ForgotForm from './ForgotForm'
import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import Link from '@components/ui-components/Navigation/Link'
import { LOGIN_URL } from '@config/app'

const ForgotPassword = () => {
  const { sxHeading, sxText, sxLink } = styles
  return (
    <>
      <Heading tw={sxHeading.title + ' text-center mb-6'}>
        Recovery password
      </Heading>
      <ForgotForm />
      <Text tw={sxText.small + ' text-center mt-4 font-medium'}>
        <Link
          tw={sxLink.text}
          to={LOGIN_URL}
        >
          Go back Login page
        </Link>
      </Text>
    </>
  )
}

export default ForgotPassword
