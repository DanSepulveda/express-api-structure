// !Third-party libraries
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// !Styles
import styles from '@styles/global'
// !Custom components and hooks
import Container from '@lib/components/Layout/Container'
import { appState } from '@redux/app/appSlice'
// !Config
import { AFTER_LOGIN_URL } from '@config/app'

const LogLayout = () => {
  const { logged } = useSelector(appState)
  const { sxContainer } = styles

  if (logged) {
    return <Navigate to={AFTER_LOGIN_URL} />
  }

  return (
    <Container
      tw={
        sxContainer['col-center-center'] +
        ' min-h-svh bg-gradient-to-b from-primary-100 to-primary-50'
      }
    >
      <Container tw={sxContainer['box-white'] + ' w-11/12 sm:w-96'}>
        <Outlet />
      </Container>
    </Container>
  )
}

export default LogLayout
