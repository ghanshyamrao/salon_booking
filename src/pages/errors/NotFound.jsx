import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { Button } from '../../components/ui/button'
import { Home, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-pink-600 mb-4">404</h1>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
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
            Need help? <Link to={ROUTES.CONTACT} className="text-pink-600 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound

