import Container from '@lib/components/Layout/Container'

const Loader = () => {
  return (
    <Container tw="absolute top-0 left-0 w-svw h-svh row-center-center bg-white overflow-hidden">
      <Container tw="loader"></Container>
    </Container>
  )
}

export default Loader
