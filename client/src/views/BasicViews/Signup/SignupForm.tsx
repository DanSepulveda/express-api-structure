// * Types
import type { ResetForm } from '@lib/components/interfaces'
import type { ErrorResponse } from '@redux/api/apiSlice'
// * Third-party libraries
import * as Yup from 'yup'
// * Custom components and hooks
import Button from '@lib/components/Forms/Button'
import { Form, FormControls, FormElements } from '@lib/components/Forms/Form'
import Input from '@lib/components/Forms/Input'
import Container from '@lib/components/Layout/Container'
import { useSignupMutation } from '@redux/user/userSlice'
import toast from '@utils/alert'
// * Styles
import styles from '@styles/global'
// * Config
import yupErrors from '@config/yupErrors'

const schema = Yup.object({
  email: Yup.string().email(yupErrors.email).required(yupErrors.required),
  password: Yup.string().required(yupErrors.required).min(8, yupErrors.min8),
})
type Fields = Yup.InferType<typeof schema>

const SignupForm = () => {
  const [signup, { isLoading }] = useSignupMutation()

  const onSubmit = async (fields: Fields, reset: ResetForm) => {
    const response = await signup(fields)

    if ('data' in response) {
      reset()
      toast.alert({
        title: 'Account created',
        description: 'You will receive an email to activate your account',
        icon: 'success',
      })
    } else {
      const error = response.error as ErrorResponse
      toast.error(error.data.message)
    }
  }

  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      tw={styles.form.standart.twForm}
    >
      <FormElements
        {...styles.form.standart.twElements}
        disabled={isLoading}
        cols={{ xs: 12 }}
      >
        <Input
          name="email"
          type="email"
          label="Email address"
          {...styles.input.primary}
        />

        <Input
          name="password"
          type="password"
          label="Password"
          {...styles.input.primary}
        />
      </FormElements>
      <FormControls tw={styles.form.standart.twControls}>
        <Button
          tw="btn btn-contained w-full"
          disabled={isLoading}
          leftIcon={isLoading ? <Container tw="spinner"></Container> : null}
        >
          Create account
        </Button>
      </FormControls>
    </Form>
  )
}

export default SignupForm
