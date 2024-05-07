import Stack from '@components/Layout/Stack'
import Link from '@components/Link'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'
import usePageTitle from '@hooks/usePageTitle'

const Home = () => {
  usePageTitle('Home')
  return (
    <Stack tw="flex-col min-h-svh gap-10 sm:gap-5 bg-primary-100">
      <Heading tw="text-primary-700 text-center">Welcome to My Website</Heading>
      <Text tw="text-lg text-center">
        This is a basic home page using React and Tailwind CSS.
      </Text>
      <Link
        variant="button"
        to="/signup"
      >
        Get Started
      </Link>
    </Stack>
  )
}

export default Home
