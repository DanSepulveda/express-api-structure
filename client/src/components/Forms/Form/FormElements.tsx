import type { HTMLAttributes } from 'react'
import type { ColsProp } from '@components/interfaces'
import classNames from 'classnames'
import formStyles from './styles'
import { GridContainer } from '@components/Layout/Grid'

interface FormElementsProps extends HTMLAttributes<HTMLFieldSetElement> {
  legend?: string
  legendClassname?: string
  cols?: ColsProp
}

export const FormElements = ({
  children,
  className,
  legend,
  legendClassname,
  cols,
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
      <GridContainer
        cols={cols}
        className="gap-5"
      >
        {children}
      </GridContainer>
    </fieldset>
  )
}
