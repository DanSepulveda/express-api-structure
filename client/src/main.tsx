import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from '@config/router.tsx'
import './index.css'
import { ThemeProvider } from '@utils/useThemeContext'
import theme from '@config/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>,
)
