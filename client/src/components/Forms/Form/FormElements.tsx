import type { HTMLAttributes } from 'react'
import classNames from 'classnames'
import formStyles from './styles'

interface FormElementsProps extends HTMLAttributes<HTMLFieldSetElement> {
  legend?: string
  legendClassname?: string
}

export const FormElements = ({
  children,
  className,
  legend,
  legendClassname,
  ...props
}: FormElementsProps) => {
  return (
    <fieldset
      className={classNames(formStyles.formElements.fieldset, className)}
      {...props}
    >
      {legend ? (
        <legend
          className={classNames(
            formStyles.formElements.legend,
            legendClassname,
          )}
        >
          {legend}
        </legend>
      ) : null}
      {children}
    </fieldset>
  )
}
