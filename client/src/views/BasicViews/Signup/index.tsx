import { Link } from 'react-router-dom'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'
import Container from '@components/Layout/Container'
import Stack from '@components/Layout/Stack'
import SignupForm from './SignupForm'
import Box from '@components/Layout/Box'

const Signup = () => {
  return (
    <Container tw="bg-secondary-200 px-1">
      <Stack tw="min-h-svh flex-col gap-10">
        <Heading tw="text-primary-600">Create a new account</Heading>
        <Box tw="w-11/12 sm:w-96">
          <SignupForm />
          <Text tw="mt-4 text-center text-sm text-gray-600">
            Already have one?{' '}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Please login
            </Link>
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default Signup
