import * as Yup from 'yup'
import Button from '@components/Forms/Button'
import { Form, FormControls, FormElements } from '@components/Forms/Form'
import Input from '@components/Forms/Input'
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

const SignupForm = () => {
  const onSubmit = async (fields: Fields) => {
    console.log(fields)
  }

  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <FormElements cols={{ xs: 12 }}>
        <Input
          name="email"
          type="email"
          label="Email address"
        />
        <Input
          name="password"
          type="password"
          label="Password"
        />
      </FormElements>
      <FormControls>
        <Button fullWidth>Create account</Button>
      </FormControls>
    </Form>
  )
}

export default SignupForm
