// * Third-party libraries
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
// * Custom components and hooks
import Button from '@lib/components/Forms/Button'
import { Form, FormControls, FormElements } from '@lib/components/Forms/Form'
import Input from '@lib/components/Forms/Input'
import { useResetPasswordMutation } from '@redux/user/userSlice'
// * Styles
import styles from '@styles/global'
// * Config
import { LOGIN_URL } from '@config/app'
import yupErrors from '@config/yupErrors'

const schema = Yup.object({
  password: Yup.string().required(yupErrors.required).min(8, yupErrors.min8),
  confirmPassword: Yup.string()
    .required(yupErrors.required)
    .min(8, yupErrors.min8)
    .oneOf([Yup.ref('password')], yupErrors.notEqual),
})
type Fields = Yup.InferType<typeof schema>

const RecoveryForm = ({ token }: { token: string }) => {
  const navigate = useNavigate()
  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const onSubmit = async (fields: Fields) => {
    const response = await resetPassword({ form: fields, token })

    if ('data' in response) {
      navigate(LOGIN_URL)
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
          name="password"
          type="password"
          label="New password"
          {...styles.input.primary}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm new password"
          {...styles.input.primary}
        />
      </FormElements>
      <FormControls tw={styles.form.standart.twControls}>
        <Button
          tw="btn btn-contained w-full"
          disabled={isLoading}
        >
          Change password
        </Button>
      </FormControls>
    </Form>
  )
}

export default RecoveryForm
