import Container from '@lib/components/Layout/Container'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface BottomNavigationProps extends HTMLAttributes<HTMLDivElement> {
  tw?: string
}

// TODO: add button to close and open drawer and hide/show based on breakpoint
const Drawer = ({ children, tw, ...props }: BottomNavigationProps) => {
  return (
    <Container
      as="nav"
      tw={twMerge(
        'hidden sm:flex flex-col items-start justify-start h-full overflow-y-auto',
        tw,
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Drawer
