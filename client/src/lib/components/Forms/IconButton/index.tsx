import type { ButtonHTMLAttributes } from 'react'

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'type'> {
  tw?: string
}

const IconButton = ({ children, tw, ...props }: IconButtonProps) => {
  return (
    <button
      type="button"
      className={tw}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
