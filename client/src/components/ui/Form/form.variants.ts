import { cva } from 'class-variance-authority'

export const formVariants = cva('w-full', {
  variants: {
    spacing: {
      1: 'space-y-6',
    },
  },
  defaultVariants: {
    spacing: 1,
  },
})

export const legendVariants = cva('mb-1.5 w-full border-b-2 font-heading', {
  variants: {
    variant: {
      primary: 'text-lg font-medium text-gray-700',
      secondary: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
