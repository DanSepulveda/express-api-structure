// !Third-party libraries
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
// !Custom components and hooks
import Container from '@lib/components/Layout/Container'
import useDocumentTitle from '@hooks/useDocumentTitle'
import { useRefreshTokenQuery } from '@redux/user/userSlice'
// !Config
import { MOBILE_NAVBAR_COLOR } from '@config/app'

const RootLayout = () => {
  const { isLoading } = useRefreshTokenQuery()
  useDocumentTitle()

  if (isLoading) {
    return null
  }

  return (
    <Container>
      <Helmet>
        <meta
          name="theme-color"
          content={MOBILE_NAVBAR_COLOR}
        />
      </Helmet>
      <Toaster />
      <Outlet />
    </Container>
  )
}

export default RootLayout
