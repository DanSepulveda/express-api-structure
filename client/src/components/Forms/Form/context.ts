import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { AnyObject } from 'yup'
import { createContext } from 'react'

interface ContextProps {
  errors: FieldErrors
  register: UseFormRegister<AnyObject>
}

const FormContext = createContext<ContextProps | undefined>(undefined)

export default FormContext
