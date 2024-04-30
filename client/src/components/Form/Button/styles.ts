const buttonStyles = {
  base: 'shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all',
  color: {
    primary: {
      contained:
        'bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/70 focus:ring-primary-500 text-white',
      outlined:
        'text-primary-600 border border-primary-500 hover:bg-primary-600 hover:text-white',
    },
    secondary: {
      contained:
        'bg-secondary-600 hover:bg-secondary-700 disabled:bg-secondary-600/70 focus:ring-secondary-500 text-white',
      outlined:
        'text-secondary-600 border border-secondary-500 hover:bg-secondary-600 hover:text-white',
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
    dark: {
      contained:
        'bg-dark-600 hover:bg-dark-700 disabled:bg-dark-600/70 focus:ring-dark-500 text-white',
      outlined:
        'text-dark-600 border border-dark-500 hover:bg-dark-600 hover:text-white',
    },
  },
  size: {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-3 py-1 text-sm font-medium',
    md: 'px-4 py-1 text-base font-medium',
    lg: 'px-5 py-2 text-lg font-semibold',
    xl: 'px-6 py-2.5 text-xl font-extrabold',
  },
  radius: {
    normal: 'rounded-normal',
    full: 'rounded-full',
    none: 'rounded-none',
  },
}

export default buttonStyles
