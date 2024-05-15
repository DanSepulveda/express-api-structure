import type { HTMLAttributes } from 'react'
import Container from '@lib/components/Layout/Container'
import { twMerge } from 'tailwind-merge'

interface BottomNavigationProps extends HTMLAttributes<HTMLDivElement> {
  tw?: string
}

// TODO: prop to hide/show based on breakpoint
const BottomNavigation = ({
  children,
  tw,
  ...props
}: BottomNavigationProps) => {
  return (
    <Container
      as="nav"
      tw={twMerge(
        'flex flex-row justify-center items-center w-full sm:hidden',
        tw,
      )}
      {...props}
    >
      {children}
    </Container>
  )
}

export default BottomNavigation
