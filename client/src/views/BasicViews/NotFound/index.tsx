import Box from '@components/Layout/Box'
import Stack from '@components/Layout/Stack'
import Link from '@components/Link'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'
import usePageTitle from '@hooks/usePageTitle'

const NotFound = () => {
  usePageTitle('Not found')

  return (
    <Stack tw="bg-gradient-to-tr from-pink-300 to-pink-400 h-svh">
      <Box tw="w-11/12 sm:w-9/12 h-5/6">
        <Stack tw="flex-col h-full">
          <Heading tw="text-9xl text-primary-900">404</Heading>
          <Heading
            as="h2"
            variant="h3"
            tw="mb-6"
          >
            Page Not Found
          </Heading>
          <Text tw="text-lg text-gray-700 mb-8 text-center">
            Oops! The page you are looking for does not exist.
          </Text>
          <Link to="/">Go back to Home Page</Link>
        </Stack>
      </Box>
    </Stack>
  )
}

export default NotFound
