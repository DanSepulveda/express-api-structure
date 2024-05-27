import { cva } from 'class-variance-authority'

export const headingVariants = cva('font-heading', {
  variants: {
    variant: {
      title: 'text-4xl font-extrabold',
      subtitle: 'text-3xl font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      primary: 'text-primary-800 dark:text-primary-500',
      secondary: 'theme-neutral text-primary-800 dark:text-primary-100',
      success: 'theme-green text-primary-700 dark:text-primary-500',
      warning: 'theme-amber text-primary-600 dark:text-primary-300',
      error: 'theme-red text-primary-600 dark:text-primary-500',
    },
  },
  defaultVariants: {
    variant: 'subtitle',
    align: 'left',
    color: 'primary',
  },
})
