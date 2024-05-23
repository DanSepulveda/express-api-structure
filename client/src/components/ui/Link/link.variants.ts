import { cva } from 'class-variance-authority'

import { buttonVariants } from '../Button/button.variants'

export const linkVariants = cva('', {
  variants: {
    variant: {
      text: 'text-blue-700 underline underline-offset-2 font-semibold hover:text-blue-500',
      button: buttonVariants({ variant: 'primary' }),
    },
    activeVariant: {
      drawer: 'bg-primary-50 text-primary-800',
      bottom: 'text-primary-700',
    },
  },
  defaultVariants: {
    variant: 'text',
  },
})
