import { cva } from 'class-variance-authority'

export const iconButtonVariants = cva('transition-all', {
  variants: {
    variant: {
      clean: 'bg-transparent hover:bg-primary-100 active:bg-primary-200',
      solid:
        'text-white bg-primary-600  hover:bg-primary-700 active:bg-primary-800',
      outline:
        'border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 active:bg-primary-100',
    },
    shape: {
      circle: 'rounded-full',
      rounded: 'rounded-md',
      square: 'rounded-none',
    },
    size: {
      sm: 'p-1.5 text-lg',
      md: 'p-2 text-xl',
      lg: 'p-2 text-2xl',
    },
  },
  defaultVariants: {
    variant: 'clean',
    shape: 'circle',
    size: 'md',
  },
})
