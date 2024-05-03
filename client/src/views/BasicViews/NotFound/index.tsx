import Container from '@components/Layout/Container'
import Stack from '@components/Layout/Stack'
import Heading from '@components/Typography/Heading'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className="bg-secondary-200">
      <Stack
        direction="col"
        className="min-h-svh gap-5"
      >
        <Heading>Page not found!</Heading>
        <Link
          to="/"
          className="hover:underline"
        >
          Go back to home
        </Link>
      </Stack>
    </Container>
  )
}

export default NotFound
