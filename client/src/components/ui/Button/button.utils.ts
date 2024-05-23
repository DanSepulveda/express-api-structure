import type { UseFormReturn } from 'react-hook-form'

export const isDisabled = (context: UseFormReturn, disabledProp: boolean) => {
  if (context === null) return disabledProp
  const { errors } = context.formState
  return Object.keys(errors).length !== 0 || disabledProp
}
