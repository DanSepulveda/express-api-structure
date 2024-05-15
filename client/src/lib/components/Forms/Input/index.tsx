import type { ColsProp, InputTypeProp } from '@lib/components/interfaces'
import { type InputHTMLAttributes } from 'react'
import { FieldErrors, useFormContext } from 'react-hook-form'
import { IoInformationCircleSharp } from 'react-icons/io5'
import Text from '@lib/components/Typography/Text'
import { GridItem } from '@lib/components/Layout/Grid'
import { DEFAULT_INPUT_TYPE } from '@lib/components/defaults'
import { twMerge } from 'tailwind-merge'

interface LabelProps {
  label: string
  decorator?: string
  twLabel?: string
  twDecorator?: {
    required: string
    info: string
  }
}

interface InputProps
  extends LabelProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  type?: InputTypeProp
  name: string
  twInputBase?: string
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
          tw={decorator === '*' ? twDecorator?.required : twDecorator?.info}
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
  label,
  type = DEFAULT_INPUT_TYPE,
  decorator,
  twInputBase,
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
          twLabel={twLabel}
          twDecorator={twDecorator}
        />
        <input
          id={name}
          type={type}
          autoComplete={name}
          className={twMerge(
            twInputBase,
            error ? twInputError : twInputSuccess,
          )}
          {...props}
          {...register(name)}
        />
        <InputError
          error={error}
          twError={twError}
        />
      </label>
    </GridItem>
  )
}

export default Input
