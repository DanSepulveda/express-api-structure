import Button from '@components/Forms/Button'
import Container from '@components/Layout/Container'
import Stack from '@components/Layout/Stack'
import Heading from '@components/Typography/Heading'
import Text from '@components/Typography/Text'

const Dashboard = () => {
  return (
    <Container tw="bg-secondary-200">
      <Stack tw="flex-col min-h-svh gap-5">
        <Heading color="secondary">Dashboard page</Heading>
        <Text tw="text-lg">This is a protected route</Text>
        <Button>Logout</Button>
      </Stack>
    </Container>
  )
}

export default Dashboard
