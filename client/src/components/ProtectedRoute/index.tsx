import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  permission: string | null
  children: ReactNode
}

const ProtectedRoute = ({ permission, children }: ProtectedRouteProps) => {
  const permissions: string[] = ['dashboard']

  if (permission === null || permissions.includes(permission)) {
    return children
  }

  return <Navigate to="/" />
}

export default ProtectedRoute
