// * Custom components
import Container from '@lib/components/Layout/Container'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'

const Dashboard = () => {
  return (
    <Container tw="col-center-center gap-5">
      <Heading tw="font-semibold text-2xl">Dashboard page</Heading>
      <Text tw="text-lg">This is a protected route</Text>
    </Container>
  )
}

export default Dashboard
