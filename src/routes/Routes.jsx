import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROUTES, ROLES } from '../constants'

import Services from '../pages/Services'
import Booking from '../pages/Booking'
import MyBookings from '../pages/MyBookings'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import NotFound from '../pages/errors/NotFound'
import Unauthorized from '../pages/errors/Unauthorized'
import ComingSoon from '../pages/ComingSoon'

const publicRoutes = [
  { path: ROUTES.HOME, key: 'home', element: <ComingSoon title="Home" /> },
  { path: ROUTES.SERVICES, key: 'services', element: <Services /> },
  { path: ROUTES.BOOKING, key: 'booking', element: <Booking /> },
  { path: ROUTES.LOGIN, key: 'login', element: <Login /> },
  {
    path: ROUTES.REGISTER,
    key: 'register',
    element: <ComingSoon title="Register" />,
  },
  {
    path: ROUTES.ABOUT,
    key: 'about',
    element: <ComingSoon title="About Us" />,
  },
  {
    path: ROUTES.CONTACT,
    key: 'contact',
    element: <ComingSoon title="Contact" />,
  },
  { path: ROUTES.UNAUTHORIZED, key: 'unauthorized', element: <Unauthorized /> },
]

const protectedRoutes = [
  {
    path: ROUTES.BOOKINGS,
    key: 'my-bookings',
    element: <MyBookings />,
    roles: [ROLES.CUSTOMER, ROLES.PROVIDER, ROLES.ADMIN],
  },
  {
    path: ROUTES.DASHBOARD,
    key: 'dashboard',
    element: <Dashboard />,
    roles: [ROLES.CUSTOMER, ROLES.PROVIDER, ROLES.ADMIN],
    children: [
      {
        index: true,
        key: 'dashboard-home',
        element: <h1>Dashboard</h1>,
      },
      {
        path: 'favorites',
        key: 'favorites',
        element: <h1>Favorites</h1>,
      },
      {
        path: 'wallet',
        key: 'wallet',
        element: <h1>Wallet</h1>,
      },
      {
        path: 'reviews',
        key: 'reviews',
        element: <h1>Reviews</h1>,
      },
      {
        path: 'chat',
        key: 'chat',
        element: <h1>Chat</h1>,
      },
      {
        path: 'settings',
        key: 'settings',
        element: <h1>Settings</h1>,
      },
    ],
  },
]

const Protected = ({ element, roles }) => {
  const { isAuthenticated, user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-200 border-t-pink-600" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: { pathname: window.location.pathname } }} replace />
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />
  }

  return element
}

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, key, element }) => (
        <Route key={key} path={path} element={element} />
      ))}

      {protectedRoutes.map(({ path, key, element, roles, children }) => (
        <Route
          key={key}
          path={path}
          element={<Protected element={element} roles={roles} />}
        >
          {children?.map(({ path: childPath, index, key: childKey, element: childElement }) => (
            index ? (
              <Route
                key={childKey}
                index
                element={childElement}
              />
            ) : (
              <Route
                key={childKey}
                path={childPath}
                element={childElement}
              />
            )
          ))}
        </Route>
      ))}

      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes