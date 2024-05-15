import Button from '@components/ui-components/Forms/Button'
import {
  Form,
  FormControls,
  FormElements,
} from '@components/ui-components/Forms/Form'
import Input from '@components/ui-components/Forms/Input'
import { LOGIN_URL } from '@config/app'
import yupErrors from '@config/yupErrors'
import { useResetPasswordMutation } from '@redux/user/userSlice'
import styles from '@styles/global'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const schema = Yup.object({
  password: Yup.string().required(yupErrors.required).min(8, yupErrors.min8),
  confirmPassword: Yup.string()
    .required(yupErrors.required)
    .min(8, yupErrors.min8)
    .oneOf([Yup.ref('password')], yupErrors.notEqual),
})
type Fields = Yup.InferType<typeof schema>

const defaultValues = {
  password: '',
  confirmPassword: '',
}

const RecoveryForm = ({ token }: { token: string }) => {
  const { sxInput, sxForm, sxButton } = styles
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
      defaultValues={defaultValues}
      tw={sxForm.standart.twForm}
    >
      <FormElements
        cols={{ xs: 12 }}
        disabled={isLoading}
        {...sxForm.standart.twElements}
      >
        <Input
          name="password"
          type="password"
          label="Password"
          {...sxInput.primary}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          {...sxInput.primary}
        />
      </FormElements>
      <FormControls tw={sxForm.standart.twControls}>
        <Button
          tw={sxButton.primary}
          disabled={isLoading}
        >
          Change password
        </Button>
      </FormControls>
    </Form>
  )
}

export default RecoveryForm
