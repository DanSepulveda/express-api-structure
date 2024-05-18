// * Custom components
import Container from '@lib/components/Layout/Container'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'

const Records = () => {
  return (
    <Container tw="col-center-center gap-5">
      <Heading tw="font-semibold text-2xl">Records page</Heading>
      <Text tw="text-lg">Another protected route</Text>
    </Container>
  )
}

export default Records
