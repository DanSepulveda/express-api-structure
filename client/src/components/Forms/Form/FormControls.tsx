import Stack from '@components/Layout/Stack'
import { useThemeContext } from '@utils/useThemeContext'
import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface FormControlsProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  tw?: string
}

export const FormControls = ({ children, tw, ...props }: FormControlsProp) => {
  const { sxForm } = useThemeContext()

  return (
    <Stack
      tw={twMerge(sxForm.controls, tw)}
      {...props}
    >
      {children}
    </Stack>
  )
}
