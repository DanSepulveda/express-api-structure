import Container from '@components/Layout/Container'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container>
      <Toaster />
      <Outlet />
    </Container>
  )
}

export default Layout
