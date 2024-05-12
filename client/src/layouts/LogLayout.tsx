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
    <Stack tw={sxStack.log()}>
      <Box tw={sxBox.log()}>
        <Outlet />
      </Box>
    </Stack>
  )
}

export default LogLayout
