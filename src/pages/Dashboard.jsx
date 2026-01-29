import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/layout/HeroBanner'
import { Card } from '../components/ui/card'
import { ROUTES } from '../constants'
import { useAuth } from '../context/AuthContext'
import {
  LayoutDashboard,
  Calendar,
  Heart,
  Wallet,
  Star,
  MessageCircle,
  Settings,
  LogOut,
  User,
  ChevronRight
} from 'lucide-react';
import userImage from '../assets/userimage.png'

const Dashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { icon: Calendar, label: 'Bookings', path: ROUTES.BOOKINGS },
    { icon: Heart, label: 'Favorites', path: ROUTES.FAVORITES },
    { icon: Wallet, label: 'Wallet', path: ROUTES.WALLET },
    { icon: Star, label: 'Reviews', path: ROUTES.REVIEWS },
    { icon: MessageCircle, label: 'Chat', path: ROUTES.CHAT },
    { icon: Settings, label: 'Settings', path: ROUTES.SETTINGS },
  ];

  const isActive = (path) => {
    if (path === ROUTES.DASHBOARD) {
      return location.pathname === ROUTES.DASHBOARD;
    }
    return location.pathname.startsWith(path);
  };

  const getBreadcrumbs = () => {
    if (location.pathname === ROUTES.BOOKINGS) {
      return [
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Customer', href: ROUTES.DASHBOARD },
        { label: 'Bookings', href: ROUTES.BOOKINGS }
      ];
    }
    return [
      { label: 'Home', href: ROUTES.HOME },
      { label: 'Customer', href: ROUTES.DASHBOARD },
      { label: 'Dashboard', href: ROUTES.DASHBOARD }
    ];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <HeroBanner
        title={location.pathname === ROUTES.BOOKINGS ? 'Bookings' : 'Dashboard'}
        breadcrumbs={getBreadcrumbs()}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">

            <Card className="border-none border-gray-200 bg-gray-100">
              <div className="m-4 rounded-lg p-2 text-center bg-white">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-3">
                  <img
                    src={userImage}
                    alt='user image'
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{user?.name || 'John Smith'}</h3>
                <p className="text-sm text-gray-500">Member Since Sep 2021</p>
              </div>
              <nav className="p-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.path === ROUTES.DASHBOARD;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${isActive
                        ? 'bg-none text-[#B56584] font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      {item.path === ROUTES.SETTINGS && (
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      )}
                    </Link>
                  );
                })}
                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 w-full transition"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </Card>
          </aside>

          <div className="flex-1 min-w-[680px]">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard