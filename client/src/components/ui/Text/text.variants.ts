import { cva } from 'class-variance-authority'

export const textVariants = cva('font-text text-gray-800', {
  variants: {
    variant: {
      primary: 'text-base font-normal',
      secondary: 'text-sm font-semibold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'left',
  },
})
