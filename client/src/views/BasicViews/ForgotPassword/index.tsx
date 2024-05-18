// * Custom components
import Heading from '@lib/components/Typography/Heading'
import Text from '@lib/components/Typography/Text'
import ForgotForm from './ForgotForm'

const ForgotPassword = () => {
  return (
    <>
      <Heading tw="heading-title text-center mb-6">Forgot password?</Heading>
      <Text tw="text-normal mb-5">
        Please enter your email to recovery your password.
      </Text>
      <ForgotForm />
    </>
  )
}

export default ForgotPassword
