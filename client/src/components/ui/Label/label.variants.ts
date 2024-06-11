import { cva } from 'class-variance-authority'

export const labelVariants = cva('', {
  variants: {
    variant: {
      input: 'block text-base font-medium text-gray-600 font-roboto',
      check: 'ms-1.5',
    },
    decoratorVariant: {
      info: '*:text-gray-700',
      required: '*:text-red-600 *:font-medium',
    },
  },
  defaultVariants: {
    variant: 'input',
    decoratorVariant: 'required',
  },
})
