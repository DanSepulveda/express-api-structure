import type { FormHTMLAttributes } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import classNames from 'classnames'
import formStyles from './styles'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  schema: Yup.ObjectSchema<Yup.AnyObject>
  onSubmit: (fields: any) => Promise<void> | void
  defaultValues: Record<string, any>
}

export const Form = ({
  children,
  schema,
  onSubmit,
  defaultValues,
  className,
  ...props
}: FormProps) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <form
        className={classNames(formStyles.form, className)}
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export { FormControls } from './FormControls'
export { FormElements } from './FormElements'
