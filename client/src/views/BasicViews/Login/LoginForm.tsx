import * as Yup from 'yup'
import Button from '@components/ui-components/Forms/Button'
import {
  Form,
  FormControls,
  FormElements,
} from '@components/ui-components/Forms/Form'
import Input from '@components/ui-components/Forms/Input'
import yupErrors from '@config/yupErrors'
import { useLoginMutation } from '@redux/user/userSlice'
import styles from '@styles/global'

const schema = Yup.object({
  email: Yup.string().email(yupErrors.email).required(yupErrors.required),
  password: Yup.string().required(yupErrors.required).min(8, yupErrors.min8),
})
type Fields = Yup.InferType<typeof schema>

const defaultValues = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const { sxInput, sxForm, sxButton } = styles
  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async (fields: Fields) => {
    await login(fields)
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
          name="email"
          type="email"
          label="Email address"
          {...sxInput.primary}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          {...sxInput.primary}
        />
      </FormElements>
      <FormControls tw={sxForm.standart.twControls}>
        <Button
          tw={sxButton.primary + ' w-full'}
          disabled={isLoading}
        >
          Log in
        </Button>
      </FormControls>
    </Form>
  )
}

export default LoginForm
