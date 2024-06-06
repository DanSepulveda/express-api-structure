import { yupResolver } from '@hookform/resolvers/yup'
import { type VariantProps } from 'class-variance-authority'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import type {
  ColsProp,
  ContainerAttributes,
  FieldsetAttributes,
  FormAttributes,
  LegendAttributes,
  ResetForm,
} from '@components/ui/interfaces'
import Flex from '@components/ui/Flex'
import {
  GridContainer,
  type GridContainerAttributes,
} from '@components/ui/Grid'
import { cn } from '@utils/classname'
import { formVariants, legendVariants } from './form.variants'

interface FormProps extends FormAttributes, VariantProps<typeof formVariants> {
  schema: Yup.ObjectSchema<Yup.AnyObject>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (fields: any, reset: ResetForm) => Promise<void> | void
  defaultValues?: Record<string, unknown>
}

interface ControlsProp extends ContainerAttributes {}

interface LegendProps
  extends LegendAttributes,
    VariantProps<typeof legendVariants> {}

interface FieldsetProps extends FieldsetAttributes {
  legend?: string
  cols?: ColsProp
  legendProps?: LegendProps
  gridProps?: GridContainerAttributes
}

export const Form = ({
  children,
  className,
  defaultValues,
  onSubmit,
  schema,
  spacing,
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
        className={cn(formVariants({ spacing }), className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export const Controls = ({ children, className, ...props }: ControlsProp) => {
  return (
    <Flex
      justify="end"
      spacing={3}
      className={className}
      {...props}
    >
      {children}
    </Flex>
  )
}

const Legend = ({ children, className, variant, ...props }: LegendProps) => {
  return (
    <legend
      className={cn(legendVariants({ variant }), className)}
      {...props}
    >
      {children}
    </legend>
  )
}

export const Fieldset = ({
  children,
  className,
  cols,
  gridProps,
  legend,
  legendProps,
  ...props
}: FieldsetProps) => {
  return (
    <fieldset
      className={className}
      {...props}
    >
      {legend ? <Legend {...legendProps}>{legend}</Legend> : null}
      <GridContainer
        cols={cols}
        spacing="form"
        {...gridProps}
      >
        {children}
      </GridContainer>
    </fieldset>
  )
}
