// * Third-party libraries
import { useSelector } from 'react-redux'
// * Custom components
import Container from '@lib/components/Layout/Container'
import Link from '@lib/components/Navigation/Link'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
// * Config
import { AFTER_LOGIN_URL, HOME_URL } from '@config/app'
import { appState } from '@redux/app/appSlice'

const NotFound = () => {
  const { logged } = useSelector(appState)

  return (
    <Container
      as="main"
      tw="row-center-center h-svh bg-gradient-primary-200"
    >
      <Container tw="box-white col-center-center w-11/12 sm:w-9/12 h-5/6">
        <Heading tw="font-heading text-9xl text-primary-900 font-bold">
          404
        </Heading>
        <Heading
          as="h2"
          tw="heading-subtitle"
        >
          Page Not Found
        </Heading>
        <Text tw="text-large my-6 text-center">
          Oops! The page you are looking for does not exist.
        </Text>
        <Link
          tw="link"
          to={logged ? AFTER_LOGIN_URL : HOME_URL}
        >
          {logged ? 'Go back to Dashboard' : 'Go back to Home Page'}
        </Link>
      </Container>
    </Container>
  )
}

export default NotFound
