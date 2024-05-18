// * Third-party libraries
import { useMatches } from 'react-router-dom'
import { IoLogOutOutline } from 'react-icons/io5'
// * Custom components and hooks
import Button from '@lib/components/Forms/Button'
import Container from '@lib/components/Layout/Container'
import Text from '@lib/components/Typography/Text'
import { useLogoutMutation } from '@redux/user/userSlice'

const Header = () => {
  const matches = useMatches()
  const title = matches[matches.length - 1].handle?.title
  const [logout, { isLoading }] = useLogoutMutation()

  return (
    <Container
      as="header"
      tw="row-between-center w-full h-14 px-3 shadow-md z-50 bg-white"
    >
      <Text tw="text-primary-800 text-xl font-bold">{title}</Text>
      <Button
        onClick={() => logout()}
        tw="btn btn-contained"
        disabled={isLoading}
        leftIcon={
          isLoading ? <Container tw="spinner"></Container> : <IoLogOutOutline />
        }
      >
        Logout
      </Button>
    </Container>
  )
}

export default Header
