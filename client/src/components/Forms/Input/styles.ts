const inputStyles = {
  label: {
    base: 'block text-base text-gray-900',
    decorator: {
      info: 'text-gray-700',
      required: 'text-error-500 font-medium',
    },
  },
  input: {
    base: 'my-0.5 w-full appearance-none rounded-md border px-3 py-2 shadow-sm placeholder-gray-400 text-gray-700',
    color: {
      primary:
        'focus:border-primary-500 focus:outline-none focus:ring-primary-500',
      secondary:
        'focus:border-secondary-500 focus:outline-none focus:ring-secondary-500',
      accent:
        'focus:border-accent-500 focus:outline-none focus:ring-accent-500',
      info: 'focus:border-info-500 focus:outline-none focus:ring-info-500',
      warning:
        'focus:border-warning-500 focus:outline-none focus:ring-warning-500',
      unset: '',
    },
    error:
      'border-error-400 focus:outline-none focus:border-error-400 focus:ring-error-400',
  },
  errorText: 'ms-1.5 block text-xs font-medium text-error-500/95',
}

export default inputStyles
