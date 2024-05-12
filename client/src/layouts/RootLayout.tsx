import Container from '@components/ui-components/Layout/Container'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useRefreshTokenQuery } from '@redux/user/userSlice'
import useDocumentTitle from '@hooks/useDocumentTitle'
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
