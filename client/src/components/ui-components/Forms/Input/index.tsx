import type {
  ColsProp,
  InputTypeProp,
} from '@components/ui-components/interfaces'
import { type InputHTMLAttributes } from 'react'
import { FieldErrors, useFormContext } from 'react-hook-form'
import { IoInformationCircleSharp } from 'react-icons/io5'
import Text from '@components/ui-components/Typography/Text'
import { GridItem } from '@components/ui-components/Layout/Grid'
import { DEFAULT_INPUT_TYPE } from '@components/ui-components/defaults'
import { twMerge } from 'tailwind-merge'

interface TW {
  twBase: string
  twLabel: string
  twDecorator: {
    required: string
    info: string
  }
  twInputSuccess: string
  twInputError: string
  twError: string
}

interface LabelProps {
  label: string
  decorator?: string
  twLabel?: string
  twDecorator?: string
}

interface InputProps
  extends LabelProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  type: InputTypeProp
  name: string
  variant?: string
  tw?: TW
  twBase?: string
  twInputSuccess?: string
  twInputError?: string
  twError?: string
  cols?: ColsProp
}

const InputLabel = ({ label, decorator, twLabel, twDecorator }: LabelProps) => {
  return (
    <Text
      as="span"
      tw={twLabel}
    >
      {label}
      {decorator ? (
        <Text
          as="span"
          tw={twDecorator}
        >
          {' ' + decorator}
        </Text>
      ) : null}
    </Text>
  )
}

const InputError = ({
  error,
  twError,
}: {
  error: string | FieldErrors[0]
  twError: string | undefined
}) => {
  return (
    <div>
      {error ? (
        <Text
          as="strong"
          tw={twError}
        >
          <IoInformationCircleSharp className="mb-0.5 me-1 inline" />
          {error ? error.toString() : null}
        </Text>
      ) : null}
    </div>
  )
}

const Input = ({
  name,
  type = DEFAULT_INPUT_TYPE,
  label,
  decorator,
  tw,
  twBase,
  twInputSuccess,
  twInputError,
  twLabel,
  twDecorator,
  twError,
  cols,
  ...props
}: InputProps) => {
  const { register, formState } = useFormContext()
  const { errors } = formState
  const error = errors[name]?.message

  return (
    <GridItem cols={cols}>
      <label htmlFor={name}>
        <InputLabel
          label={label}
          decorator={decorator}
          twLabel={twMerge(tw?.twLabel, twLabel)}
          twDecorator={twMerge(
            decorator === '*' ? tw?.twDecorator.required : tw?.twDecorator.info,
            twDecorator,
          )}
        />
        <input
          id={name}
          type={type}
          autoComplete={name}
          className={twMerge(
            tw?.twBase,
            twBase,
            error ? tw?.twInputError : tw?.twInputSuccess,
            error ? twInputError : twInputSuccess,
          )}
          {...props}
          {...register(name)}
        />
        <InputError
          error={error}
          twError={twMerge(tw?.twError, twError)}
        />
      </label>
    </GridItem>
  )
}

export default Input
