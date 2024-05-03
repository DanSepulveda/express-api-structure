import Container from '@components/Layout/Container'
import Stack from '@components/Layout/Stack'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container className="bg-secondary-200">
      <Stack
        direction="col"
        className="min-h-svh gap-5"
      >
        <Heading color="secondary">Welcome to My Website</Heading>
        <Text className="text-lg">
          This is a basic home page using React and Tailwind CSS.
        </Text>
        <Link
          to="/signup"
          className="rounded bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
        >
          Get Started
        </Link>
      </Stack>
    </Container>
  )
}

export default Home
