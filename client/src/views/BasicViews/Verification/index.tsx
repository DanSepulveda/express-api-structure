// * Third-party libraries
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
// * Custom components and hooks
import Loader from '@components/Loader'
import { useVerifyAccountQuery } from '@redux/user/userSlice'
// * Config
import { NOT_FOUND_URL } from '@config/app'

const Verification = () => {
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const { isLoading, isError } = useVerifyAccountQuery(token)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isError) {
      const alertData = {
        title: 'Verification complete',
        description: 'You can login now',
        icon: 'success',
      }
      navigate('/login', { state: { alert: alertData } })
    }
    if (!isLoading && isError) {
      navigate(NOT_FOUND_URL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError])

  return <Loader />
}

export default Verification
