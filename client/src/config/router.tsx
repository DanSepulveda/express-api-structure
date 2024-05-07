import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '@components/ProtectedRoute'
import Home from '@views/BasicViews/Home'
import Login from '@views/BasicViews/Login'
import Signup from '@views/BasicViews/Signup'
import Dashboard from '@views/Dashboard/Dashboard'
import NotFound from '@views/BasicViews/NotFound'
import Layout from '@views/Layouts'

const routes = [
  {
    path: '/',
    element: <Home />,
    permission: null,
  },
  {
    path: 'login',
    element: <Login />,
    permission: null,
  },
  {
    path: 'signup',
    element: <Signup />,
    permission: null,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    permission: 'dashboard',
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes.map((route) => ({
        path: route.path,
        element: (
          <ProtectedRoute permission={route.permission}>
            {route.element}
          </ProtectedRoute>
        ),
      })),
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
