import Stack from '@components/ui-components/Layout/Stack'
import Link from '@components/ui-components/Navigation/Link'
import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import usePageTitle from '@hooks/usePageTitle'
import styles from '@styles/global'

const Home = () => {
  usePageTitle('Home')
  const { sxStack, sxHeading, sxText, sxLink } = styles

  return (
    <Stack tw={sxStack.col + ' min-h-svh gap-10 sm:gap-5 bg-primary-100 px-5'}>
      <Heading tw={sxHeading.title + ' text-center'}>
        Welcome to My Website
      </Heading>
      <Text tw={sxText.medium + ' text-center'}>
        This is a basic home page using React and Tailwind CSS.
      </Text>
      <Link
        tw={sxLink.button}
        to="/signup"
      >
        Get Started
      </Link>
    </Stack>
  )
}

export default Home
