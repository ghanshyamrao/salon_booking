import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { Button } from '../../components/ui/button'
import { Shield, Home, ArrowLeft } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Unauthorized = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <Shield className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-9xl font-bold text-red-600 mb-4">401</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Unauthorized Access
        </h2>
        
        <p className="text-lg text-gray-600 mb-2">
          You don't have permission to access this page.
        </p>
        
        {user && (
          <p className="text-sm text-gray-500 mb-8">
            Your current role: <span className="font-semibold text-gray-700">{user.role}</span>
          </p>
        )}
        
        {!user && (
          <p className="text-sm text-gray-500 mb-8">
            Please log in to access this page.
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
          <Link to={ROUTES.HOME}>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Button>
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Need help? <Link to={ROUTES.CONTACT} className="text-red-600 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized

