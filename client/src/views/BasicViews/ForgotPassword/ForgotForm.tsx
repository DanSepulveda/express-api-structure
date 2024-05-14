import Button from '@components/ui-components/Forms/Button'
import {
  Form,
  FormControls,
  FormElements,
} from '@components/ui-components/Forms/Form'
import Input from '@components/ui-components/Forms/Input'
import { ResetForm } from '@components/ui-components/interfaces'
import yupErrors from '@config/yupErrors'
import { useForgotPasswordMutation } from '@redux/user/userSlice'
import styles from '@styles/global'
import * as Yup from 'yup'

const schema = Yup.object({
  email: Yup.string().email(yupErrors.email).required(yupErrors.required),
})
type Fields = Yup.InferType<typeof schema>

const defaultValues = {
  email: '',
}

const ForgotForm = () => {
  const { sxInput, sxForm, sxButton } = styles
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
          label="Email"
          {...sxInput.primary}
        />
      </FormElements>
      <FormControls tw={sxForm.standart.twControls}>
        <Button
          tw={sxButton.primary}
          disabled={isLoading}
        >
          Recovery
        </Button>
      </FormControls>
    </Form>
  )
}

export default ForgotForm
