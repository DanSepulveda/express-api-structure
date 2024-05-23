import { cva } from 'class-variance-authority'

export const flexVariants = cva('flex', {
  variants: {
    variant: {
      'row-center-center': 'flex-row justify-center items-center',
      'row-between-center': 'flex-row justify-between items-center',
      'col-center-center': 'flex-col justify-center items-center',
    },
  },
  defaultVariants: {
    variant: 'row-center-center',
  },
})
