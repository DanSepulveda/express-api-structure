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
      primary: 'theme-neutral text-primary-800',
      secondary: 'text-primary-800',
      success: 'theme-green text-primary-700',
      warning: 'theme-amber text-primary-600',
      error: 'theme-red text-primary-600',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
    align: 'left',
    color: 'primary',
  },
})
