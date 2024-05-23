import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'rounded transition-all border border-transparent flex flex-row items-center justify-center gap-2',
  {
    variants: {
      variant: {
        primary:
          'shadow bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white active:bg-primary-700/90',
        secondary:
          'shadow bg-gray-300 hover:bg-gray-400/60 disabled:bg-primary-400 text-gray-700 active:bg-gray-400/90',
        text: 'shadow-none hover:bg-red-50 text-red-600',
      },
      size: {
        sm: 'px-2 py-0.5 text-sm',
        md: 'px-2.5 py-1 text-base font-medium',
        lg: 'px-4 py-1.5 text-lg font-medium',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)
