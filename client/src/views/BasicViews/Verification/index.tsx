import Link from '@components/ui-components/Navigation/Link'
import Heading from '@components/ui-components/Typography/Heading'
import Text from '@components/ui-components/Typography/Text'
import { LOGIN_URL, NOT_FOUND_URL } from '@config/app'
import { useVerifyAccountQuery } from '@redux/user/userSlice'
import styles from '@styles/global'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Verification = () => {
  const { sxHeading, sxText, sxLink } = styles
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
      <Heading tw={twMerge(sxHeading.title, 'text-2xl text-center')}>
        Verification complete
      </Heading>
      <Text tw={sxText.normal + ' text-center mt-3'}>
        You can{' '}
        <Link
          tw={sxLink.text}
          to={LOGIN_URL}
        >
          Login now
        </Link>
      </Text>
    </>
  )
}

export default Verification
