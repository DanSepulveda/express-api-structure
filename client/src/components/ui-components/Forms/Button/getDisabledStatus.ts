import type { UseFormReturn } from 'react-hook-form'

const getDisabledStatus = (context: UseFormReturn, disabled: boolean) => {
  if (context === null) return disabled

  const { errors } = context.formState

  if (Object.keys(errors).length !== 0 || disabled) {
    return true
  } else {
    return false
  }
}

export default getDisabledStatus
