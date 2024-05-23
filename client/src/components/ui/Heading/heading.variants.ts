import { cva } from 'class-variance-authority'

export const headingVariants = cva('font-heading', {
  variants: {
    variant: {
      title: 'text-4xl font-extrabold text-primary-800',
      subtitle: 'text-3xl font-bold text-gray-800',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'title',
    align: 'left',
  },
})
