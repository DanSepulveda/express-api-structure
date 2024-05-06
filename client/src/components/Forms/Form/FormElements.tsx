import type { HTMLAttributes } from 'react'
import type { ColsProp } from '@components/interfaces'
import { GridContainer } from '@components/Layout/Grid'
import { twMerge } from 'tailwind-merge'
import { useThemeContext } from '@utils/useThemeContext'

interface FormElementsProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'className'> {
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
  const { sxForm } = useThemeContext()

  return (
    <fieldset
      className={twMerge(sxForm.fieldset, twFieldset)}
      {...props}
    >
      {legend ? (
        <legend className={twMerge(sxForm.legend, twLegend)}>{legend}</legend>
      ) : null}
      <GridContainer
        cols={cols}
        tw={twMerge(sxForm.grid, twGrid)}
      >
        {children}
      </GridContainer>
    </fieldset>
  )
}
