import { cva } from 'class-variance-authority'

import { buttonVariants } from '../Button/button.variants'

export const linkVariants = cva('', {
  variants: {
    variant: {
      text: 'underline underline-offset-2 text-blue-700 hover:text-blue-500 dark:text-cyan-400 dark:hover:text-cyan-500',
      button: buttonVariants({ variant: 'solid' }),
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
