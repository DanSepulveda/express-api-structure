import { cva } from 'class-variance-authority'

export const gridVariants = cva('w-full grid grid-cols-12', {
  variants: {
    spacing: {
      form: 'gap-5',
    },
  },
  defaultVariants: {},
})
