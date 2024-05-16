// * Custom components
import Container from '@lib/components/Layout/Container'
import Link from '@lib/components/Navigation/Link'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
// * Config
import { APP_NAME, LOGIN_URL } from '@config/app'

const Home = () => {
  return (
    <Container
      as="main"
      tw="col-center-center min-h-svh gap-10 px-5 bg-primary-50"
    >
      <Heading tw="heading-title text-center mb-6">
        Welcome to {APP_NAME}
      </Heading>
      <Text tw="text-large text-center">
        This is a basic home page using React and Tailwind CSS.
      </Text>
      <Link
        tw="btn btn-contained"
        to={LOGIN_URL}
      >
        Get Started
      </Link>
    </Container>
  )
}

export default Home
