import type { DialogHTMLAttributes } from 'react'
import { ModalProvider } from '@lib/hooks/useModal'

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  closeModal: () => void
  tw?: string
}

const Modal = ({
  children,
  tw,
  open = false,
  closeModal,
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
      <ModalProvider context={{ closeModal }}>{children}</ModalProvider>
    </dialog>
  )
}

export default Modal
