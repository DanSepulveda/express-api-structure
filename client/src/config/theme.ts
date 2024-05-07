import { createTheme } from '@utils/useThemeContext'

const theme = createTheme({
  sxButton: {
    base: 'rounded-normal px-5 py-2 text-lg font-medium shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
      default:
        'bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/70 focus:ring-primary-700 text-white',
      secondary:
        'border border-error-500 text-error-600 hover:bg-error-50 focus:ring-error-700',
    },
  },
  sxHeading: {
    base: 'font-heading',
    variants: {
      default: 'text-4xl font-extrabold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-medium',
      h6: 'text-lg',
    },
  },
  sxText: {
    base: '',
    variants: {
      default: '',
    },
  },
  sxStack: {
    base: 'w-full flex',
    variants: {
      default: 'flex-row justify-center items-center',
    },
  },
  sxContainer: {
    base: '',
    variants: {
      default: 'w-full',
      responsive: 'container mx-auto',
    },
  },
  sxBox: {
    base: '',
    variants: {
      default: 'rounded-lg bg-white px-4 py-10 shadow-md',
    },
  },
  sxInput: {
    base: 'my-0.5 w-full appearance-none rounded-md border px-3 py-2 text-gray-700 placeholder-gray-400 shadow-sm',
    variants: {
      default: {
        onInputSuccess:
          'focus:border-primary-500 focus:outline-none focus:ring-primary-500',
        onInputError:
          'border-error-400 focus:outline-none focus:border-error-400 focus:ring-error-400',
        label: 'block text-base text-gray-900',
        decorator: {
          info: 'text-gray-700',
          required: 'text-error-500 font-medium',
        },
        error: 'ms-1.5 block text-xs font-medium text-error-500/95',
      },
    },
  },
  sxGridContainer: {
    base: 'grid max-w-full',
    variants: {
      default: 'grid-cols-12',
    },
  },
  sxGridItem: {
    base: '',
    variants: {
      default: '',
    },
  },
  sxForm: {
    base: 'w-full space-y-5',
    fieldset: 'space-y-2',
    legend:
      'mb-1.5 w-full border-b-2 font-heading text-lg font-medium text-gray-700',
    grid: 'gap-5',
    controls: 'justify-end gap-3',
  },
  sxLink: {
    variants: {
      default: 'text-link hover:underline',
      button:
        'rounded-normal bg-primary-600 px-5 py-2 text-white transition-all hover:bg-primary-700',
    },
  },
})

export default theme
