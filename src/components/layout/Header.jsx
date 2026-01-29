import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../ui/button'
import { Bell, MessageCircle, User, Menu, X, User2, LockIcon } from 'lucide-react'
import logo from '../../assets/Logo.png'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-none sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to={ROUTES.HOME} className="flex items-center space-x-2">
            <img src={logo} alt="HAIR RAP BY YOYO" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to={ROUTES.HOME} className="text-gray-700 text-sm font-medium hover:text-pink-600 transition">
              Home
            </Link>
            <Link to={ROUTES.SERVICES} className="text-gray-700 text-sm font-medium hover:text-pink-600 transition">
              Services
            </Link>
            <Link to={ROUTES.ABOUT} className="text-gray-700 text-sm font-medium hover:text-pink-600 transition">
              About Us
            </Link>
            <Link to={ROUTES.CONTACT} className="text-gray-700 text-sm font-medium hover:text-pink-600 transition">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <>
                <button className="hidden sm:block p-2 text-gray-600 hover:text-pink-600 transition">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="hidden sm:block p-2 text-gray-600 hover:text-pink-600 transition">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => navigate(ROUTES.DASHBOARD)}
                  className="hidden sm:flex items-center space-x-2 p-2 text-gray-600 hover:text-pink-600 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                </button>
                <Button variant="ghost" size="sm" onClick={logout} className="hidden sm:inline-flex">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => navigate(ROUTES.LOGIN)}
                  className="hidden bg-gray-200 sm:inline-flex"
                >
                 <LockIcon className="h-4 w-4" /> Login
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => navigate(ROUTES.REGISTER)}
                  className="hidden sm:inline-flex"
                >
                 <User2 className="h-4 w-4" />  Register
                </Button>
              </>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-pink-600 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to={ROUTES.HOME} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 text-sm font-medium hover:text-pink-600 transition px-2"
              >
                Home
              </Link>
              <Link 
                to={ROUTES.SERVICES} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 text-sm font-medium hover:text-pink-600 transition px-2"
              >
                Services
              </Link>
              <Link 
                to={ROUTES.ABOUT} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 text-sm font-medium hover:text-pink-600 transition px-2"
              >
                About Us
              </Link>
              <Link 
                to={ROUTES.CONTACT} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 text-sm font-medium hover:text-pink-600 transition px-2"
              >
                Contact
              </Link>
              {user ? (
                <>
                  <button 
                    onClick={() => { navigate(ROUTES.DASHBOARD); setMobileMenuOpen(false); }}
                    className="flex items-center space-x-2 p-2 text-gray-700 hover:text-pink-600 transition text-left"
                  >
                    <User className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                  <Button variant="ghost" size="sm" onClick={logout} className="w-full justify-start">
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => { navigate(ROUTES.LOGIN); setMobileMenuOpen(false); }}
                    className="w-full"
                  >
                    Login
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => { navigate(ROUTES.REGISTER); setMobileMenuOpen(false); }}
                    className="w-full"
                  >
                    Register
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

