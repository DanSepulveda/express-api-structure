// * Third-party libraries
import { useNavigate, useSearchParams } from 'react-router-dom'
// * Custom components and hooks
import Heading from '@lib/components/Typography/Heading'
import RecoveryForm from './RecoveryForm'
import { usePreValidateQuery } from '@redux/user/userSlice'
// * Config
import { NOT_FOUND_URL } from '@config/app'

const RecoveryPassword = () => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const { isLoading, isError } = usePreValidateQuery(token)

  if (isLoading) {
    return
  }

  if (isError) {
    navigate(NOT_FOUND_URL)
  }

  return (
    <>
      <Heading tw="heading-title text-center mb-6">Reset password</Heading>
      <RecoveryForm token={token} />
    </>
  )
}

export default RecoveryPassword
