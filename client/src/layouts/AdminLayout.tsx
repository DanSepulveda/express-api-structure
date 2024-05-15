import Header from '@components/Header'
import Container from '@components/ui-components/Layout/Container'
import BottomNavigation from '@components/ui-components/Navigation/BottomNavigation'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { appState } from '@redux/app/appSlice'
import { LOGIN_URL } from '@config/app'
import Stack from '@components/ui-components/Layout/Stack'
import Drawer from '@components/ui-components/Navigation/Drawer'
import navigation from '@config/navigation'
import IconLink from '@components/ui-components/Navigation/IconLink'
import reactImg from '@assets/react.svg'
import styles from '@styles/global'

const AdminLayout = () => {
  const { sxStack, sxIconLink, sxDrawer, sxBottomNavigation } = styles
  const { logged } = useSelector(appState)

  if (!logged) {
    return <Navigate to={LOGIN_URL} />
  }

  return (
    <Stack tw={sxStack.row + ' h-svh w-full'}>
      <Drawer tw={sxDrawer.gradient}>
        <img
          src={reactImg}
          className="mx-auto mb-7"
        />
        {navigation.map((el) => (
          <IconLink
            key={el.to}
            icon={el.icon}
            to={el.to}
            text={el.text}
            position="drawer"
            {...sxIconLink.drawer}
          />
        ))}
      </Drawer>
      <Stack
        as="section"
        tw={sxStack.col + ' grow h-full overflow-hidden'}
      >
        <Header />
        <Container
          as="main"
          tw="flex-1 w-full max-w-full overflow-y-auto bg-primary-50 p-3"
        >
          <Outlet />
        </Container>
        <BottomNavigation tw={sxBottomNavigation.solid}>
          {navigation
            .filter((nav) => nav.bottom)
            .map((el) => (
              <IconLink
                key={el.to}
                icon={el.icon}
                to={el.to}
                text={el.text}
                position="bottom"
                {...sxIconLink.bottom}
              />
            ))}
        </BottomNavigation>
      </Stack>
    </Stack>
  )
}

export default AdminLayout
