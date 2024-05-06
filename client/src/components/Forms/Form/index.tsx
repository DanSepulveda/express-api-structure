import type { FormHTMLAttributes } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { useThemeContext } from '@utils/useThemeContext'

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'className'> {
  schema: Yup.ObjectSchema<Yup.AnyObject>
  onSubmit: (fields: any) => Promise<void> | void
  defaultValues: Record<string, any>
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
  const { sxForm } = useThemeContext()
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className={twMerge(sxForm.base, tw)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export { FormControls } from './FormControls'
export { FormElements } from './FormElements'
