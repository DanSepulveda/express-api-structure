// * Custom components
import Container from '@lib/components/Layout/Container'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'

const Tasks = () => {
  return (
    <Container tw="col-center-center gap-5">
      <Heading tw="font-semibold text-2xl">Tasks page</Heading>
      <Text tw="text-lg">And the third protected route</Text>
    </Container>
  )
}

export default Tasks
