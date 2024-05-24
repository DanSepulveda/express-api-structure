import { cva } from 'class-variance-authority'

import { COLOR_VARIANTS } from '../defaults'

export const textVariants = cva('font-text', {
  variants: {
    variant: {
      primary: 'text-base font-normal text-primary-900',
      secondary: 'text-sm font-semibold text-primary-700',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: COLOR_VARIANTS,
  },
  defaultVariants: {
    variant: 'primary',
    align: 'left',
    color: 'neutral',
  },
})
