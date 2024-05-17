import { type ReactNode, createContext, useContext, useState } from 'react'

interface Context {
  closeModal: () => void
}

const ModalContext = createContext<Context>({
  closeModal: () => null,
})

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => useContext(ModalContext)

export const ModalProvider = ({
  children,
  context,
}: {
  children: ReactNode
  context: Context
}) => {
  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  )
}

export const useModal = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return { open, openModal, closeModal }
}
