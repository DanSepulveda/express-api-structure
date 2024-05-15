import Box from '@components/ui-components/Layout/Box'
import Stack from '@components/ui-components/Layout/Stack'
import { AFTER_LOGIN_URL } from '@config/app'
import { appState } from '@redux/app/appSlice'
import styles from '@styles/global'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const LogLayout = () => {
  const { logged } = useSelector(appState)
  const { sxBox, sxStack } = styles

  if (logged) {
    return <Navigate to={AFTER_LOGIN_URL} />
  }

  return (
    <Stack
      tw={
        sxStack.col +
        ' min-h-svh bg-gradient-to-b from-primary-100 to-primary-50'
      }
    >
      <Box tw={sxBox.white + ' w-11/12 sm:w-96'}>
        <Outlet />
      </Box>
    </Stack>
  )
}

export default LogLayout
