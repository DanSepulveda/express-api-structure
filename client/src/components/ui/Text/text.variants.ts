import { cva } from 'class-variance-authority'

export const textVariants = cva('font-text', {
  variants: {
    variant: {
      paragraph: 'text-base font-normal',
      subparagraph: 'text-sm font-semibold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      primary: 'theme-neutral text-primary-800 dark:text-primary-100',
      secondary: 'text-primary-800 dark:text-primary-300',
      success: 'theme-green text-primary-700 dark:text-primary-300',
      warning: 'theme-amber text-primary-600 dark:text-primary-300',
      error: 'theme-red text-primary-600 dark:text-primary-400',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
    align: 'left',
    color: 'primary',
  },
})
