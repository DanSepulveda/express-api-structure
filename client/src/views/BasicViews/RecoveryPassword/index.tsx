import Heading from '@components/ui-components/Typography/Heading'
import styles from '@styles/global'
import { useNavigate, useSearchParams } from 'react-router-dom'
import RecoveryForm from './RecoveryForm'
import { usePreValidateQuery } from '@redux/user/userSlice'
import { NOT_FOUND_URL } from '@config/app'

const RecoveryPassword = () => {
  const { sxHeading } = styles
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const token = params.get('token') ?? ''
  const { isLoading, isError } = usePreValidateQuery(token)

  if (isLoading) {
    return
  }

  if (isError) {
    console.log('entro acpa')
    navigate(NOT_FOUND_URL)
  }

  return (
    <>
      <Heading tw={sxHeading.title + ' text-center mb-6'}>
        Reset password
      </Heading>
      <RecoveryForm token={token} />
    </>
  )
}

export default RecoveryPassword
