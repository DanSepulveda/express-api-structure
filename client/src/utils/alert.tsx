import Alert from '@lib/components/Feedback/Alert'
import Container from '@lib/components/Layout/Container'
import styles from '@styles/global'
import hotToast, { type Toast } from 'react-hot-toast'

export interface ToastAlert {
  title: string
  description?: string
  icon?: 'success' | 'error' | 'warning' | 'question'
}

const options: Options = {
  style: {
    backgroundColor: '#4c4c4c',
    color: 'white',
  },
  position: 'top-center',
}

const toast = {
  loading: (message: string = 'Cargando') => hotToast.loading(message, options),
  success: (message: string, id?: string | undefined) =>
    hotToast.success(message, { ...options, id }),
  error: (message: string, id?: string | undefined) => {
    hotToast.error(message, { ...options, id })
  },
  alert: ({ title, description, icon = 'success' }: ToastAlert) =>
    hotToast.custom(
      (t) => (
        <Container
          tw={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } bg-black/50 w-svw h-svh row-center-center absolute -inset-4`}
        >
          <Alert
            title={title}
            description={description}
            icon={icon}
            handleClose={() => hotToast.dismiss(t.id)}
            {...styles.alert.primary}
          />
        </Container>
      ),
      { duration: Infinity },
    ),
}

export default toast

type Options = Partial<
  Pick<
    Toast,
    | 'id'
    | 'icon'
    | 'duration'
    | 'ariaProps'
    | 'className'
    | 'position'
    | 'style'
    | 'iconTheme'
  >
>
