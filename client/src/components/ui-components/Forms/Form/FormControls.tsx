import Stack from '@components/ui-components/Layout/Stack'
import type { HTMLAttributes } from 'react'

interface FormControlsProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  tw?: string
}

export const FormControls = ({ children, tw, ...props }: FormControlsProp) => {
  return (
    <Stack
      tw={tw}
      {...props}
    >
      {children}
    </Stack>
  )
}
