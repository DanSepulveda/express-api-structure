import type { FieldsetHTMLAttributes } from 'react'
import type { ColsProp } from '@lib/components/interfaces'
import { GridContainer } from '@lib/components/Layout/Grid'

interface FormElementsProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'className'> {
  legend?: string
  cols?: ColsProp
  twFieldset?: string
  twLegend?: string
  twGrid?: string
}

export const FormElements = ({
  children,
  legend,
  cols,
  twFieldset,
  twLegend,
  twGrid,
  ...props
}: FormElementsProps) => {
  return (
    <fieldset
      className={twFieldset}
      {...props}
    >
      {legend ? <legend className={twLegend}>{legend}</legend> : null}
      <GridContainer
        cols={cols}
        tw={twGrid}
      >
        {children}
      </GridContainer>
    </fieldset>
  )
}
