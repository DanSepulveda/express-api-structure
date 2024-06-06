import { cva } from 'class-variance-authority'

export const containerVariants = cva('', {
  variants: {
    variant: {
      full: 'w-full',
      fluid: 'container mx-auto',
      box: 'rounded-lg shadow-md bg-white',
    },
  },
  defaultVariants: {
    variant: 'full',
  },
})
