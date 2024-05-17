import { ModalProvider } from '@lib/hooks/useModal'
import { DialogHTMLAttributes } from 'react'

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  handleClose: () => void
  tw?: string
}

const Modal = ({
  children,
  tw,
  open = false,
  handleClose,
  ...props
}: ModalProps) => {
  if (!open) {
    return
  }

  return (
    <dialog
      open={open}
      className={tw}
      {...props}
    >
      <ModalProvider context={{ handleClose }}>{children}</ModalProvider>
    </dialog>
  )
}

export default Modal
