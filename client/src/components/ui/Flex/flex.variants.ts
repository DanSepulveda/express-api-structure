import { cva } from 'class-variance-authority'

export const flexVariants = cva('flex', {
  variants: {
    direction: {
      col: 'flex-col',
      row: 'flex-row',
    },
    justify: {
      center: 'justify-center',
      between: 'justify-between',
    },
    align: {
      center: 'items-center',
    },
    spacing: {
      1: 'gap-2',
      2: 'gap-3',
      3: 'gap-4',
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    spacing: 1,
  },
})
