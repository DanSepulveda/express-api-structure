import type { HTMLAttributes } from 'react'
import classNames from 'classnames'
import formStyles from './styles'

interface FormControlsProps extends HTMLAttributes<HTMLDivElement> {}

export const FormControls = ({
  children,
  className,
  ...props
}: FormControlsProps) => {
  return (
    <div
      className={classNames(formStyles.formControls, className)}
      {...props}
    >
      {children}
    </div>
  )
}
