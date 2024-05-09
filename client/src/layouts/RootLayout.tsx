import Container from '@components/ui-components/Layout/Container'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useRefreshTokenQuery } from '@redux/user/userSlice'

const RootLayout = () => {
  const { isLoading } = useRefreshTokenQuery()

  if (isLoading) {
    return null
  }

  return (
    <Container>
      <Helmet>
        <meta
          name="theme-color"
          content="#0a0a0a"
        />
      </Helmet>
      <Toaster />
      <Outlet />
    </Container>
  )
}

export default RootLayout
