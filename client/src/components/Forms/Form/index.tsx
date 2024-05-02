import type { FormHTMLAttributes } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import FormContext from './context'
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  return (
    <form
      className={classNames(formStyles.form, className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FormContext.Provider value={{ errors, register }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

export { FormControls } from './FormControls'
export { FormElements } from './FormElements'
