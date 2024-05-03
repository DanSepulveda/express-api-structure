import type { ColorProp, InputTypeProp } from '@components/interfaces'
import { type InputHTMLAttributes } from 'react'
import { FieldErrors, useFormContext } from 'react-hook-form'
import { IoInformationCircleSharp } from 'react-icons/io5'
import classNames from 'classnames'
import inputStyles from './styles'
import Text from '@components/Typography/Text'
import { GridItem } from '@components/Layout/Grid'
import { INPUT_DEFAULTS } from '@components/defaults'

interface LabelProps {
  label: string
  decorator?: string
  labelClass?: string
  decoratorClass?: string
}

interface InputProps
  extends LabelProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type: InputTypeProp
  name: string
  color?: Exclude<ColorProp, 'error'>
  errorClass?: string
}

const InputLabel = ({
  label,
  decorator,
  labelClass,
  decoratorClass,
}: LabelProps) => {
  const decoratorStyle = decorator === '*' ? 'required' : 'info'

  return (
    <Text
      as="span"
      className={classNames(inputStyles.label.base, labelClass)}
    >
      {label}
      {decorator ? (
        <Text
          as="span"
          className={classNames(
            inputStyles.label.decorator[decoratorStyle],
            decoratorClass,
          )}
        >
          {' ' + decorator}
        </Text>
      ) : null}
    </Text>
  )
}

const InputError = ({
  error,
  errorClass,
}: {
  error: string | FieldErrors[0]
  errorClass: string | undefined
}) => {
  return (
    <div>
      {error ? (
        <Text
          as="strong"
          className={classNames(
            { [inputStyles.errorText]: !errorClass },
            errorClass,
          )}
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
  type = INPUT_DEFAULTS.type,
  color = INPUT_DEFAULTS.color,
  decorator,
  labelClass,
  decoratorClass,
  errorClass,
  ...props
}: InputProps) => {
  const { register, formState } = useFormContext()
  const { errors } = formState
  const error = errors[name]?.message

  return (
    <GridItem>
      <label htmlFor={name}>
        <InputLabel
          label={label}
          decorator={decorator}
          labelClass={labelClass}
          decoratorClass={decoratorClass}
        />
        <input
          id={name}
          type={type}
          autoComplete={name}
          className={classNames(
            inputStyles.input.base,
            { [inputStyles.input.color[color]]: !error },
            {
              [inputStyles.input.error]: !!error,
            },
          )}
          {...props}
          {...register(name)}
        />
        <InputError
          error={error}
          errorClass={errorClass}
        />
      </label>
    </GridItem>
  )
}

export default Input
