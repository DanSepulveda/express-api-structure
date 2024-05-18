// * Third-party libraries
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// * Custom components and hooks
import Container from '@lib/components/Layout/Container'
import { appState } from '@redux/app/appSlice'
// * Config
import { AFTER_LOGIN_URL } from '@config/app'

const LogLayout = () => {
  const { logged } = useSelector(appState)

  if (logged) {
    return <Navigate to={AFTER_LOGIN_URL} />
  }

  return (
    <Container tw="col-center-center min-h-svh bg-gradient-to-b from-primary-100 to-primary-50">
      <Container tw="box-white px-4 py-6 w-11/12 sm:w-96">
        <Outlet />
      </Container>
    </Container>
  )
}

export default LogLayout
