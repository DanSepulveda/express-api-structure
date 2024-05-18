// * Third-party libraries
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { twJoin } from 'tailwind-merge'
// * Custom components and hooks
import Container from '@lib/components/Layout/Container'
import BottomNavigation from '@lib/components/Navigation/BottomNavigation'
import Drawer from '@lib/components/Navigation/Drawer'
import IconLink from '@lib/components/Navigation/IconLink'
import Header from '@components/Header'
import selectTheme from '@utils/selectTheme'
// * Styles
import styles from '@styles/global'
// * Config
import { LOGIN_URL } from '@config/app'
import navigation from '@config/navigation'
import { appState } from '@redux/app/appSlice'
import reactImg from '@assets/react.svg'

const AdminLayout = () => {
  const { logged, theme } = useSelector(appState)

  if (!logged) {
    return <Navigate to={LOGIN_URL} />
  }

  return (
    <Container tw={twJoin('flex flex-row h-svh w-full', selectTheme(theme))}>
      <Drawer tw="bg-gradient-to-b from-primary-500 to-primary-400 w-52 py-5 pl-3">
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
            {...styles.iconLink.drawer}
          />
        ))}
      </Drawer>
      <Container
        as="section"
        tw="flex flex-col grow overflow-hidden"
      >
        <Header />
        <Container
          as="main"
          tw="flex-1 w-full max-w-full overflow-y-auto bg-primary-50 p-3"
        >
          <Outlet />
        </Container>
        <BottomNavigation tw="bg-white border-t-2 border-primary-600/50">
          {navigation
            .filter((nav) => nav.bottom)
            .map((el) => (
              <IconLink
                key={el.to}
                icon={el.icon}
                to={el.to}
                text={el.text}
                position="bottom"
                {...styles.iconLink.bottom}
              />
            ))}
        </BottomNavigation>
      </Container>
    </Container>
  )
}

export default AdminLayout
