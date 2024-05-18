// * Types
import type { ErrorResponse } from '@redux/api/apiSlice'
// * Third-party libraries
import * as Yup from 'yup'
// * Custom components and hooks
import Button from '@lib/components/Forms/Button'
import { Form, FormControls, FormElements } from '@lib/components/Forms/Form'
import Input from '@lib/components/Forms/Input'
import Container from '@lib/components/Layout/Container'
import { useLoginMutation } from '@redux/user/userSlice'
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

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async (fields: Fields) => {
    const response = await login(fields)

    if ('error' in response) {
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
        cols={{ xs: 12 }}
        disabled={isLoading}
        {...styles.form.standart.twElements}
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
          Log in
        </Button>
      </FormControls>
    </Form>
  )
}

export default LoginForm
