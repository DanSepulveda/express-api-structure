import { ReactNode, createContext, useContext, useState } from 'react'

interface Context {
  handleClose: () => void
}

const ModalContext = createContext<Context>({
  handleClose: () => null,
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

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return { open, handleOpen, handleClose }
}
