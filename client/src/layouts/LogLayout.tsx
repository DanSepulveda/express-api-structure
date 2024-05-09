import Box from '@components/ui-components/Layout/Box'
import Stack from '@components/ui-components/Layout/Stack'
import { AFTER_LOGIN_URL } from '@config/app'
import { appState } from '@redux/app/appSlice'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const LogLayout = () => {
  const { logged } = useSelector(appState)

  if (logged) {
    return <Navigate to={AFTER_LOGIN_URL} />
  }

  return (
    <Stack
      variant="col"
      tw="min-h-svh bg-pink-200"
    >
      <Box tw="w-11/12 sm:w-96">
        <Outlet />
      </Box>
    </Stack>
  )
}

export default LogLayout
