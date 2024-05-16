// * Third-party libraries
import { useNavigate, useSearchParams } from 'react-router-dom'
// * Custom components and hooks
import Container from '@lib/components/Layout/Container'
import Link from '@lib/components/Navigation/Link'
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
import { useVerifyAccountQuery } from '@redux/user/userSlice'
// * Config
import { LOGIN_URL, NOT_FOUND_URL } from '@config/app'
import { IoCheckmarkCircle } from 'react-icons/io5'

const Verification = () => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const { isLoading, isError } = useVerifyAccountQuery(token)

  if (isLoading) {
    return
  }

  if (isError) {
    navigate(NOT_FOUND_URL)
  }

  return (
    <>
      <Container tw="row-center-center">
        <IoCheckmarkCircle className="text-green-600 text-5xl mb-2" />
      </Container>
      <Heading tw="heading-subtitle text-center mb-5">
        Verification complete
      </Heading>
      <Text tw="text-normal text-center">
        You can{' '}
        <Link
          tw="link"
          to={LOGIN_URL}
        >
          Login now
        </Link>
      </Text>
    </>
  )
}

export default Verification
