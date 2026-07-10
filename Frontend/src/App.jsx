import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './components/common/ToastProvider'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
