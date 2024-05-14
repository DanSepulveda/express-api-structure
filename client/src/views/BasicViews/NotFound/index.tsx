import Box from '@components/ui-components/Layout/Box'
import Stack from '@components/ui-components/Layout/Stack'
import Link from '@components/ui-components/Navigation/Link'
import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import { HOME_URL } from '@config/app'
import styles from '@styles/global'

const NotFound = () => {
  const { sxStack, sxBox, sxHeading, sxLink, sxText } = styles

  return (
    <Stack
      tw={sxStack.row + ' h-svh bg-gradient-to-br from-pink-200 to-pink-100'}
    >
      <Box tw={sxBox.white + ' w-11/12 sm:w-9/12 h-5/6'}>
        <Stack tw={sxStack.col + ' h-full'}>
          <Heading tw={sxHeading.notFound}>404</Heading>
          <Heading
            as="h2"
            tw={sxHeading.subtitle}
          >
            Page Not Found
          </Heading>
          <Text tw={sxText.large + ' my-6 text-center'}>
            Oops! The page you are looking for does not exist.
          </Text>
          <Link
            tw={sxLink.text}
            to={HOME_URL}
          >
            Go back to Home Page
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}

export default NotFound
