import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from '@config/router.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
