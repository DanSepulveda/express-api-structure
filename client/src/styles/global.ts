const styles = {
  alert: {
    primary: {
      twContainer:
        'mb-5 box-white max-w-[90vw] sm:max-w-md w-full pointer-events-auto flex items-center ring-1 ring-black ring-opacity-5 p-3 gap-3',
      twTitle: 'text-base font-medium text-gray-900',
      twDescription: 'mt-0.5 text-sm text-gray-600',
      twIconButton:
        'p-2 rounded-full hover:bg-neutral-200 active:bg-neutral-300 transition-all text-lg',
    },
  },
  form: {
    standart: {
      twForm: 'form',
      twElements: {
        twFieldset: 'form-fieldset',
        twLegend: 'form-legend',
        twGrid: 'form-grid',
      },
      twControls: 'form-controls',
    },
  },
  iconLink: {
    drawer: {
      twContainer: 'flex flex-row items-center justify-start gap-3',
      twLink:
        'rounded-s-full text-white font-bold w-full py-2 pl-5 hover:bg-primary-600/40 hover:scale-105 transition-all',
      twIcon: 'text-xl',
      twText: 'font-normal',
    },
    bottom: {
      twContainer: 'flex flex-col justify-center items-center',
      twLink: 'text-gray-600 font-semibold w-full py-2',
      twIcon: 'text-xl mb-0.5',
      twText: 'text-xs',
    },
  },
  input: {
    primary: {
      twInputBase: 'input',
      twInputSuccess: 'input-success',
      twInputError: 'input-error',
      twLabel: 'input-label',
      twDecorator: {
        info: 'decorator-info',
        required: 'decorator-required',
      },
      twError: 'input-error-message',
    },
  },
}

export default styles
