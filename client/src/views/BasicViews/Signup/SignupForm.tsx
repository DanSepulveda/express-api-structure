import * as Yup from 'yup'
import Button from '@components/ui-components/Forms/Button'
import {
  Form,
  FormControls,
  FormElements,
} from '@components/ui-components/Forms/Form'
import Input from '@components/ui-components/Forms/Input'
import yupErrors from '@config/yupErrors'
import { useSignupMutation } from '@redux/user/userSlice'
import { ResetForm } from '@components/ui-components/interfaces'
import styles from '@styles/global'
import toast from '@utils/alert'
import { ErrorResponse } from '@redux/api/apiSlice'

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
  const { sxInput, sxForm, sxButton } = styles
  const [signup, { isLoading }] = useSignupMutation()

  const onSubmit = async (fields: Fields, reset: ResetForm) => {
    const response = await signup(fields)

    if ('data' in response) {
      reset()
      toast.signup(fields.email)
    } else {
      const error = response.error as ErrorResponse
      toast.error(error.data.message)
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
        {...sxForm.standart.twElements}
        disabled={isLoading}
        cols={{ xs: 12 }}
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
          Create account
        </Button>
      </FormControls>
    </Form>
  )
}

export default SignupForm
