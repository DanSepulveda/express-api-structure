import { Link } from 'react-router-dom'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'
import Container from '@components/Layout/Container'
import Stack from '@components/Layout/Stack'
import LoginForm from './LoginForm'
import Box from '@components/Layout/Box'

const Login = () => {
  return (
    <Container tw="bg-secondary-200 px-1">
      <Stack tw="min-h-svh flex-col gap-10">
        <Heading tw="text-primary-600">Login to your account</Heading>
        <Box tw="w-11/12 sm:w-96">
          <LoginForm />
          <Text tw="mt-4 text-center text-sm text-gray-600">
            New to our platform?{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Create an account
            </Link>
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default Login
