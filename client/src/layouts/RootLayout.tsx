// * Third-party libraries
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import { Outlet, useLocation } from 'react-router-dom'
// * Custom components and hooks
import useRefreshLogin from '@hooks/useRefreshLogin'
import Loader from '@components/Loader'
import toast, { type ToastAlert } from '@utils/alert'
// * Config
import { MOBILE_NAVBAR_COLOR } from '@config/app'

const RootLayout = () => {
  const location = useLocation()
  const { isLoading } = useRefreshLogin()

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
