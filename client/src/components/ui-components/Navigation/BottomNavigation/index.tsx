import type { HTMLAttributes } from 'react'
import Stack from '@components/ui-components/Layout/Stack'
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
    <Stack
      as="nav"
      tw={twMerge(
        'flex flex-row justify-center items-center w-full sm:hidden',
        tw,
      )}
      {...props}
    >
      {children}
    </Stack>
  )
}

export default BottomNavigation
