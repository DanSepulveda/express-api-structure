// * Types
import type { ResetForm } from '@lib/components/interfaces'
// * Third-party libraries
import * as Yup from 'yup'
// * Custom components
import Button from '@lib/components/Forms/Button'
import { Form, FormControls, FormElements } from '@lib/components/Forms/Form'
import Input from '@lib/components/Forms/Input'
import Link from '@lib/components/Navigation/Link'
import { useForgotPasswordMutation } from '@redux/user/userSlice'
// * Styles
import styles from '@styles/global'
// * Config
import { LOGIN_URL } from '@config/app'
import yupErrors from '@config/yupErrors'

const schema = Yup.object({
  email: Yup.string().email(yupErrors.email).required(yupErrors.required),
})
type Fields = Yup.InferType<typeof schema>

const ForgotForm = () => {
  const [getPassword, { isLoading }] = useForgotPasswordMutation()

  const onSubmit = async (fields: Fields, reset: ResetForm) => {
    const response = await getPassword(fields)

    if ('data' in response) {
      reset()
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
          label=""
          placeholder="Email address"
          {...styles.input.primary}
        />
      </FormElements>
      <FormControls tw={styles.form.standart.twControls}>
        <Button
          tw="peer btn btn-contained order-2"
          disabled={isLoading}
        >
          Recovery
        </Button>
        <Link
          tw="btn btn-contained-secondary order-1 peer-disabled:pointer-events-none"
          to={LOGIN_URL}
        >
          Cancel
        </Link>
      </FormControls>
    </Form>
  )
}

export default ForgotForm
