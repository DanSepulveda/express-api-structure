// * Third-party libraries
import * as Yup from 'yup'
// * Custom components and hooks
import Button from '@lib/components/Forms/Button'
import { Form, FormControls, FormElements } from '@lib/components/Forms/Form'
import Input from '@lib/components/Forms/Input'
import { useLoginMutation } from '@redux/user/userSlice'
// * Styles
import styles from '@styles/global'
// * Config
import yupErrors from '@config/yupErrors'

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
  const { sxInput, sxForm } = styles
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
          tw="btn btn-contained w-full"
          disabled={isLoading}
        >
          Log in
        </Button>
      </FormControls>
    </Form>
  )
}

export default LoginForm
