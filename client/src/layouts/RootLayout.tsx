// * Third-party libraries
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import { Outlet, useLocation } from 'react-router-dom'
// * Custom components and hooks
import useDocumentTitle from '@hooks/useDocumentTitle'
import { useRefreshTokenQuery } from '@redux/user/userSlice'
import toast, { type ToastAlert } from '@utils/alert'
// * Config
import { MOBILE_NAVBAR_COLOR } from '@config/app'
import Loader from '@components/Loader'

const RootLayout = () => {
  const { isLoading } = useRefreshTokenQuery()
  const location = useLocation()
  useDocumentTitle()

  if (isLoading) {
    return <Loader />
  }

  if (location.state && location.state.alert) {
    const data: ToastAlert = location.state.alert

    toast.alert({
      title: data.title,
      description: data.description,
      icon: data.icon,
    })

    window.history.replaceState(null, '')
  }

  return (
    <>
      <Helmet>
        <meta
          name="theme-color"
          content={MOBILE_NAVBAR_COLOR}
        />
      </Helmet>
      <Toaster />
      <Outlet />
    </>
  )
}

export default RootLayout
