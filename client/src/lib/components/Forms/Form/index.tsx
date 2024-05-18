import type { FormHTMLAttributes } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import { ResetForm } from '@lib/components/interfaces'

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'className' | 'onSubmit'> {
  schema: Yup.ObjectSchema<Yup.AnyObject>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (fields: any, reset: ResetForm) => Promise<void> | void
  defaultValues?: Record<string, unknown>
  tw?: string
}

export const Form = ({
  children,
  schema,
  onSubmit,
  defaultValues,
  tw,
  ...props
}: FormProps) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(() =>
          onSubmit(methods.getValues(), methods.reset),
        )}
        noValidate
        className={tw}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export { FormControls } from './FormControls'
export { FormElements } from './FormElements'
