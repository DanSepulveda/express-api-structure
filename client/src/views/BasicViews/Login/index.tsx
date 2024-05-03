import { Link } from 'react-router-dom'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'
import Box from '@components/Layout/Box'
import Container from '@components/Layout/Container'
import Stack from '@components/Layout/Stack'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Container className="bg-secondary-200 px-1">
      <Stack
        direction="col"
        className="min-h-svh gap-10"
      >
        <Heading align="center">Login to your account</Heading>
        <Box className="w-11/12 sm:w-96">
          <LoginForm />
          <Text className="mt-4 text-center text-sm text-gray-600">
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
