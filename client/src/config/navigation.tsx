import { ReactNode } from 'react'
import {
  IoBookOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
} from 'react-icons/io5'

interface NavElement {
  icon: ReactNode
  text: string
  to: string
  bottom: boolean
}

const navigation: NavElement[] = [
  {
    text: 'Home',
    icon: <IoHomeOutline />,
    to: '/dashboard',
    bottom: true,
  },
  {
    text: 'Records ',
    icon: <IoBookOutline />,
    to: '/records',
    bottom: true,
  },
  {
    text: 'Tasks',
    icon: <IoDocumentTextOutline />,
    to: '/tasks',
    bottom: true,
  },
]

export default navigation
