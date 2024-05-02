const buttonStyles = {
  base: 'shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all',
  color: {
    primary: {
      contained:
        'bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/70 focus:ring-primary-700 text-white',
      outlined:
        'text-primary-600 border border-primary-500 hover:bg-primary-600 hover:text-white',
    },
    secondary: {
      contained:
        'bg-secondary-600 hover:bg-secondary-700 disabled:bg-secondary-600/70 focus:ring-secondary-500 text-white',
      outlined:
        'text-secondary-600 border border-secondary-500 hover:bg-secondary-600 hover:text-white',
    },
    accent: {
      contained:
        'bg-accent-600 hover:bg-accent-700 disabled:bg-accent-600/70 focus:ring-accent-500 text-white',
      outlined:
        'text-accent-600 border border-accent-500 hover:bg-accent-600 hover:text-white',
    },
    info: {
      contained:
        'bg-info-600 hover:bg-info-700 disabled:bg-info-600/70 focus:ring-info-500 text-white',
      outlined:
        'text-info-600 border border-info-500 hover:bg-info-600 hover:text-white',
    },
    warning: {
      contained:
        'bg-warning-600 hover:bg-warning-700 disabled:bg-warning-600/70 focus:ring-warning-500 text-white',
      outlined:
        'text-warning-600 border border-warning-500 hover:bg-warning-600 hover:text-white',
    },
    error: {
      contained:
        'bg-error-600 hover:bg-error-700 disabled:bg-error-600/70 focus:ring-error-500 text-white',
      outlined:
        'text-error-600 border border-error-500 hover:bg-error-600 hover:text-white',
    },
    unset: {
      contained: '',
      outlined: '',
    },
  },
  size: {
    xs: 'px-3 py-1.5 text-sm',
    sm: 'px-4 py-2 text-base font-medium',
    md: 'px-5 py-2 text-lg font-medium',
    lg: 'px-6 py-3.5 text-xl font-semibold',
    xl: 'px-7 py-4 text-2xl font-extrabold',
  },
  radius: {
    normal: 'rounded-normal',
    full: 'rounded-full',
    none: 'rounded-none',
  },
}

export default buttonStyles
