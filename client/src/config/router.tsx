// * Third-party libraries
import { createBrowserRouter } from 'react-router-dom'
// * Layouts
import RootLayout from '@layouts/RootLayout'
import LogLayout from '@layouts/LogLayout'
import AdminLayout from '@layouts/AdminLayout'
// * Components
import ProtectedRoute from '@components/ProtectedRoute'
import Dashboard from '@views/Dashboard'
import Records from '@views/Records'
import Tasks from '@views/Tasks'
import Home from '@views/BasicViews/Home'
import Login from '@views/BasicViews/Login'
import Signup from '@views/BasicViews/Signup'
import NotFound from '@views/BasicViews/NotFound'
import ForgotPassword from '@views/BasicViews/ForgotPassword'
import Verification from '@views/BasicViews/Verification'
import RecoveryPassword from '@views/BasicViews/RecoveryPassword'

const protectedRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
    permission: 'dashboard',
    handle: { title: 'Dashboard' },
  },
  {
    path: 'records',
    element: <Records />,
    permission: 'records',
    handle: { title: 'Records' },
  },
  {
    path: 'tasks',
    element: <Tasks />,
    permission: 'tasks',
    handle: { title: 'Tasks' },
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home />, handle: { title: 'Home' } },
      {
        path: '',
        element: <LogLayout />,
        children: [
          {
            path: 'signup',
            element: <Signup />,
            handle: { title: 'Signup' },
          },
          {
            path: 'verify-account',
            element: <Verification />,
            handle: 'Verify account',
          },
          {
            path: 'login',
            element: <Login />,
            handle: { title: 'Login' },
          },
          {
            path: 'forgot-password',
            element: <ForgotPassword />,
            handle: { title: 'Forgot Password' },
          },
          {
            path: 'recovery-password',
            element: <RecoveryPassword />,
            handle: { title: 'Recovery Password' },
          },
        ],
      },
      {
        path: '/',
        element: <AdminLayout />,
        children: [
          ...protectedRoutes.map((route) => ({
            path: route.path,
            element: (
              <ProtectedRoute permission={route.permission}>
                {route.element}
              </ProtectedRoute>
            ),
            handle: route.handle,
          })),
        ],
      },
      {
        path: '*',
        element: <NotFound />,
        handle: { title: 'Not found' },
      },
    ],
  },
])

export default router
