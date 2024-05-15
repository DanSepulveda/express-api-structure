import Container from '@lib/components/Layout/Container'
import type { HTMLAttributes } from 'react'

interface FormControlsProp
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  tw?: string
}

export const FormControls = ({ children, tw, ...props }: FormControlsProp) => {
  return (
    <Container
      tw={tw}
      {...props}
    >
      {children}
    </Container>
  )
}
