import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/Routes'
import { Toaster } from './components/ui/sonner'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Toaster position="top-right" />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
