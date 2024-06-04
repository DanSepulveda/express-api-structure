import { cva } from 'class-variance-authority'

import { COLOR_VARIANTS } from '../defaults'

export const buttonVariants = cva(
  'rounded transition-all border flex flex-row items-center justify-center gap-2 font-medium select-none disabled:pointer-events-none',
  {
    variants: {
      variant: {
        solid:
          'shadow bg-primary-700 border-transparent text-white hover:bg-primary-800 active:bg-primary-900 disabled:bg-primary-700/40',
        outline:
          'shadow border-primary-700 text-primary-700 hover:bg-primary-100 active:bg-primary-200 disabled:opacity-40',
        text: 'border-transparent shadow-none text-primary-700 hover:bg-primary-100 active:bg-primary-200 disabled:opacity-40',
      },
      size: {
        sm: 'px-2 py-0.5 text-sm',
        md: 'px-2.5 py-1 text-base',
        lg: 'px-4 py-1.5 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
      color: COLOR_VARIANTS,
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
)
