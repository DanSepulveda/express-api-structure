import type { HTMLAttributes } from 'react'
import type { ColsProp } from '@components/ui-components/interfaces'
import { GridContainer } from '@components/ui-components/Layout/Grid'
import { twMerge } from 'tailwind-merge'

interface TW {
  twFieldset: string
  twLegend: string
  twGrid: string
}

interface FormElementsProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'className'> {
  legend?: string
  cols?: ColsProp
  tw?: TW
  twFieldset?: string
  twLegend?: string
  twGrid?: string
}

export const FormElements = ({
  children,
  legend,
  cols,
  tw,
  twFieldset,
  twLegend,
  twGrid,
  ...props
}: FormElementsProps) => {
  return (
    <fieldset
      className={twMerge(tw?.twFieldset, twFieldset)}
      {...props}
    >
      {legend ? (
        <legend className={twMerge(tw?.twLegend, twLegend)}>{legend}</legend>
      ) : null}
      <GridContainer
        cols={cols}
        tw={twMerge(tw?.twGrid, twGrid)}
      >
        {children}
      </GridContainer>
    </fieldset>
  )
}
