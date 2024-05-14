import Stack from '@components/ui-components/Layout/Stack'
import Link from '@components/ui-components/Navigation/Link'
import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import { APP_NAME, LOGIN_URL } from '@config/app'
import styles from '@styles/global'

const Home = () => {
  const { sxStack, sxHeading, sxText, sxLink } = styles

  return (
    <Stack
      tw={
        sxStack.col +
        ' min-h-svh gap-10 px-5 bg-gradient-to-b from-pink-100 to-pink-50'
      }
    >
      <Heading tw={sxHeading.title + ' text-center'}>
        Welcome to {APP_NAME}
      </Heading>
      <Text tw={sxText.medium + ' text-center'}>
        This is a basic home page using React and Tailwind CSS.
      </Text>
      <Link
        tw={sxLink.button}
        to={LOGIN_URL}
      >
        Get Started
      </Link>
    </Stack>
  )
}

export default Home
