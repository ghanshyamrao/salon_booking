import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/layout/HeroBanner'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { BOOKING_STATUS, APP_CONFIG, ROUTES } from '../constants'
import { Calendar, ChevronRight, ChevronsUpDown as ChevronUpDown, LayoutDashboard, Heart, Wallet, Star, MessageCircle, Settings, LogOut, User, ChevronLeft } from 'lucide-react'
import { getMockBookings } from '../mock'
import { Skeleton } from '../components/ui/skeleton'
import { useAuth } from '../context/AuthContext'
import userImage from '../assets/userimage.png'

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const loadBookings = async () => {
      setLoading(true)
      const stored = localStorage.getItem('bookings')
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          if (parsed.length > 0) {
            setBookings(parsed)
            setLoading(false)
            return
          }
        } catch {
        }
      }

      try {
        const mockData = await getMockBookings()
        setBookings(mockData)
        localStorage.setItem('bookings', JSON.stringify(mockData))
      } catch (error) {
        console.error('Error loading bookings:', error)
      } finally {
        setLoading(false)
      }
    }
    loadBookings()
  }, [])

  const getStatusVariant = (status) => {
    switch (status) {
      case BOOKING_STATUS.COMPLETED:
        return 'success'
      case BOOKING_STATUS.CONFIRMED:
      case BOOKING_STATUS.PENDING:
        return 'warning'
      case BOOKING_STATUS.CANCELLED:
        return 'danger'
      default:
        return 'default'
    }
  }

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === 'all') return true
    if (activeTab === BOOKING_STATUS.PENDING) {
      return booking.status === BOOKING_STATUS.PENDING || booking.status === BOOKING_STATUS.CONFIRMED
    }
    return booking.status === activeTab
  })

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedBookings = filteredBookings.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [activeTab])

  const tabCounts = {
    all: bookings.length,
    pending: bookings.filter(
      (b) =>
        b.status === BOOKING_STATUS.PENDING ||
        b.status === BOOKING_STATUS.CONFIRMED,
    ).length,
    cancelled: bookings.filter((b) => b.status === BOOKING_STATUS.CANCELLED)
      .length,
    completed: bookings.filter((b) => b.status === BOOKING_STATUS.COMPLETED)
      .length,
  }

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { icon: Calendar, label: 'Bookings', path: ROUTES.BOOKINGS },
    { icon: Heart, label: 'Favorites', path: ROUTES.FAVORITES },
    { icon: Wallet, label: 'Wallet', path: ROUTES.WALLET },
    { icon: Star, label: 'Reviews', path: ROUTES.REVIEWS },
    { icon: MessageCircle, label: 'Chat', path: ROUTES.CHAT },
    { icon: Settings, label: 'Settings', path: ROUTES.SETTINGS },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroBanner
        title="Dashboard"
        breadcrumbs={[
          { label: 'Home', href: ROUTES.HOME },
          { label: 'Customer', href: ROUTES.DASHBOARD },
          { label: 'Bookings', href: ROUTES.BOOKINGS }
        ]}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="border-none border-gray-200 bg-gray-100">
              <div className="h-[10px]" />
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
                  const isActive = item.path === ROUTES.BOOKINGS;
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

          <div className="flex-1 w-full">
            <Card className="p-4 sm:p-6 border-none bg-gray-100 border-gray-200">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeTab === 'all'
                        ? 'bg-none text-[#B56584] font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      All ({tabCounts.all})
                    </button>
                    <button
                      onClick={() => setActiveTab(BOOKING_STATUS.PENDING)}
                      className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeTab === BOOKING_STATUS.PENDING
                        ? 'bg-none text-[#B56584] font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      Pending ({tabCounts.pending})
                    </button>
                    <button
                      onClick={() => setActiveTab(BOOKING_STATUS.CANCELLED)}
                      className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeTab === BOOKING_STATUS.CANCELLED
                        ? 'bg-none text-[#B56584] font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      Canceled ({tabCounts.cancelled})
                    </button>
                    <button
                      onClick={() => setActiveTab(BOOKING_STATUS.COMPLETED)}
                      className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeTab === BOOKING_STATUS.COMPLETED
                        ? 'bg-none text-[#B56584] font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      Completed ({tabCounts.completed})
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-600">Sort by</span>
                    <div className="relative">
                      <select className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm appearance-none pr-6 sm:pr-8 focus:ring-pink-500 focus:border-pink-500">
                        <option>Date</option>
                        <option>Price</option>
                        <option>Status</option>
                      </select>
                      <ChevronUpDown className="absolute right-1 sm:right-2 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Card key={index} className="border-none  border-gray-200">
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <Skeleton className="w-4 h-4 rounded" />
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-3">
                                  <Skeleton className="h-6 w-48" />
                                  <Skeleton className="h-4 w-16" />
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-4 w-48" />
                                  <Skeleton className="h-4 w-24" />
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <Skeleton className="h-6 w-20 rounded-full" />
                              <Skeleton className="h-4 w-32" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
            ) : filteredBookings.length === 0 ? (
              <Card className="border-none bg-gray-100 border-gray-200">
                <div className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings found</h3>
                  <p className="text-gray-600">
                    {activeTab === 'all'
                      ? "You don't have any bookings yet."
                      : `You don't have any ${activeTab} bookings.`}
                  </p>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {paginatedBookings.map((booking) => (
                      <Card key={booking.id} className="border-none bg-white border-gray-200 shadow-none hover:shadow-md transition-shadow">
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="flex-1">
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2'>
                                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                    <input
                                      type="checkbox"
                                      className="w-4 accent-[#B56584] h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500 cursor-pointer"
                                    />
                                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                                      {booking.serviceName}
                                      {booking.salonName && <span className="hidden sm:inline"> | {booking.salonName}</span>}
                                    </h3>
                                    <span className="text-gray-500 text-xs sm:text-sm">#{booking.id}</span>
                                  </div>
                                  <Badge variant={getStatusVariant(booking.status)} className="px-2 sm:px-3 py-1 text-xs sm:text-sm w-fit">
                                    {getStatusLabel(booking.status)}
                                  </Badge>
                                </div>
                                {booking.salonName && (
                                  <p className="text-sm text-gray-600 mb-2 sm:hidden">{booking.salonName}</p>
                                )}
                                <div className='h-[1px] bg-gray-200 w-full my-2' />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <span>
                                      <span className='text-[#B56584]'>Booking Date </span> {booking.date} • {booking.time}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                                    <span>Total paid {APP_CONFIG.CURRENCY}{formatPrice(booking.total)}</span>
                                    <button
                                      onClick={() => navigate(`${ROUTES.BOOKINGS}/${booking.id}`)}
                                      className="text-[#B56584] cursor-pointer hover:text-pink-700 text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors"
                                    >
                                      Booking Details
                                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {filteredBookings.length > 0 && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-6 sm:mt-8">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="p-2 bg-white cursor-pointer border-none border-gray-300 rounded-full hover:bg-gray-50 text-xs font-medium transition-colors text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 3) {
                        pageNum = i + 1
                      } else if (currentPage === 1) {
                        pageNum = i + 1
                      } else if (currentPage === totalPages) {
                        pageNum = totalPages - 2 + i
                      } else {
                        pageNum = currentPage - 1 + i
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`p-2 h-8 w-8 cursor-pointer rounded-full text-xs font-medium transition-colors ${
                            currentPage === pageNum
                              ? 'bg-[#B56584] text-white shadow-sm'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 bg-white cursor-pointer border-none border-gray-300 rounded-full hover:bg-gray-50 text-xs font-medium transition-colors text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MyBookings
